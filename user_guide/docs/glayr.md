---
sidebar_position: 2
id: glayr
slug: /glayr
---

# Global Call Events

When a conference is active, user actions and collaboration workflows will trigger events.
If you're using the native HTML5 Web UI, then all these events are delivered to you via different mechanisms.

For a customised workflow orchestrator or a different UI, you may need to consume the events of the call as they happen.

## The Glayr API

The API allows you to subscribe to a call's event and manage the subscription thereafter.

#### Subscribe

The subscribe API lets you subscribe to the conference events upon basic checks.
You can only subscribe to the conference events using a JWT if
- you are one of the owners of the conference
- `client-credentials` are used for the JWT generation.

```shell
curl -v -H "Authorization: $JWT" \
  -X POST https://devapi.hoot.mx/v1/conf/{conference_id}/subscribe \
  -d '{"api_endpoint": "https://your-web-address/api/event-hook"}'

# Response
{
  "openid_configuration": "https://dev-bvjbxxca.us.auth0.com/.well-known/openid-configuration",
  "expiry_seconds": 259200,
  "id": "f0e47ec2-5a2b-47a1-a9c2-f821bbad1f06",
  "conference_number": "97463882"
}
```

If the subscription is successful, you will get the following information back

- `openid_configuration`: a full blown OIDC config, from which you have to extract the `jwks_uri`.
  - the `jwks` URI will contain all the public keys using which we will sign the JWT in the `Authorization` header of all the events.
- `expiry_seconds`: expiry in seconds from the time of creation of the subscription
- `id`: subscription ID
- `conference_number`: the Voice bridge of the number, all the events will refer to this.


#### UnSubscribe

```shell
curl -H "Authorization: $JWT" -v \
  -X DELETE https://devapi.hoot.mx/v1/subscription/{subscription_id}
```

### Managing Subscription

- You can create multiple parallel subscriptions of the same conference.
- If 2 subscriptions have same webhook and are valid, you will not get duplicate events for the same event.
- You should track the expiry of your subscription and request new subscriptions at a reasonable time before the expiry.

### Authorization

We sign our event hook `POST` requests by stamping them with `Authorization` header.
In order to verify that events are coming from us, you must verify the signed JWT using the `kid` mentioned in the header.
The public `key` corresponding to the `kid` will be found in the `jwks_uri` from `openid_configuration`.

Following fields can be expected as constant
- Algorithm: Header.alg = `RS256`
- Subject: Payload.sub = `Z2MRIrfD4dvYZvcllwqDEK9g4WlFM6B8@clients` 
- Grant-Type: Payload.gty = `client-credentials`

#### Example

```json
{
  "header": {
    "alg": "RS256",
    "typ": "JWT",
    "kid": "aD3HrOTH02OYZ6bnvFrZu"
  },
  "payload": {
    "iss": "..",
    "sub": "Z2MRIrfD4dvYZvcllwqDEK9g4WlFM6B8@clients",
    "aud": "https://devapi.hoot.mx/v1/",
    "iat": 1234,
    "exp": 5678,
    "azp": "Z2MRIrfD4dvYZvcllwqDEK9g4WlFM6B8",
    "gty": "client-credentials"
  },
  "signature": "<signature>"
}
```

#### Sign & Verify

RS256 is a type of digital signature algorithm that can be used to sign and verify JSON Web Tokens (JWTs).

Here's how the RS256 signing and verification process works:

- Generate a key pair: First, the issuer of the JWT generates a public-private key pair. The private key is kept secret and is used to sign the JWT, while the public key is shared with anyone who needs to verify the JWT.
- Sign the JWT: To sign the JWT, the issuer uses their private key and the RS256 algorithm to create a digital signature of the JWT's contents. This signature is then added to the JWT's header or payload as a new field called "signature".
- Verify the JWT: To verify the JWT, the recipient uses the public key that was shared by the issuer to decrypt the digital signature from the JWT. They then use the same algorithm (RS256) to generate a new digital signature of the JWT's contents. If the two signatures match, the JWT is considered valid.

It's important to note that RS256 is a type of asymmetric encryption, meaning that the private key used to sign the JWT is different from the public key used to verify it. This makes it more secure than symmetric encryption, where the same key is used for both signing and verification.

#### Sample Code

Python
```python
import jwt
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.asymmetric import rsa

# Step 1: Load the public key
with open("public_key.pem", "rb") as key_file:
    public_key = serialization.load_pem_public_key(
        key_file.read(), backend=default_backend()
    )

# Step 2: Verify the JWT
jwt_token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
try:
    payload = jwt.decode(jwt_token, public_key, algorithms=["RS256"])
    print("JWT is valid")
    print(payload)
except jwt.exceptions.InvalidSignatureError:
    print("JWT is invalid")
```

### JWKS

JSON Web Key Set (JWKS) is a JSON format used for representing a set of cryptographic keys used for signing and verifying JSON Web Tokens (JWTs).

A JWKS document is a JSON object that contains an array of JSON Web Key (JWK) objects, each representing a cryptographic key. Each key can be used for signing or verifying JWTs.

A typical JWKS document looks like this:

```json
{
  "keys": [
    {
      "kty": "RSA",
      "use": "sig",
      "kid": "1",
      "n": "0vx7agoebGcQSuuPiLJXZptN9nndrQmbXEps2aiAFb...<public key data>",
      "e": "AQAB"
    },
    {
      "kty": "EC",
      "use": "sig",
      "kid": "2",
      "crv": "P-256",
      "x": "MKBCTNIcKUSDii11ySs3526iDZ8AiTo7Tu6KPAqv7D4",
      "y": "4Etl6SRW2YiLUrN5vfvVHuhp7x8PxltmWWlbbM4IFyM",
      "d": "870MB6gfuTJ4ZS1Q...<private key data>"
    }
  ]
}
```
In this example, there are two keys, one RSA and one ECDSA. Each key has a kty (key type) attribute that specifies the type of the key, a use attribute that specifies the intended use of the key (sig for signing and enc for encryption), and a kid attribute that is a unique identifier for the key.

The public key data for the RSA key is stored in the n attribute (modulus) and e attribute (exponent), while the private key data for the ECDSA key is stored in the d attribute (private key). The ECDSA key also includes the x and y attributes, which represent the coordinates of the public key on the elliptic curve.

JWKS documents can be used by clients to retrieve the public keys of the authorization server or resource server in order to verify the JWTs they receive. By using a JWKS document, clients can dynamically obtain the keys and keep them up-to-date, rather than hard-coding them or relying on out-of-band exchange.

Here's an example Go code that verifies a RS256 signed JWT using a JWKS document fetched from a URL:

```go
package main

import (
	"context"
	"crypto/rsa"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"strings"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/lestrrat-go/jwx/jwk"
)

func main() {
	// Step 1: Fetch the JWKS document
	jwksURL := "https://example.com/.well-known/jwks.json"
	jwks, err := fetchJWKS(jwksURL)
	if err != nil {
		log.Fatalf("Failed to fetch JWKS: %v", err)
	}

	// Step 2: Parse and verify the JWT
	jwtToken := "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
	token, err := jwt.Parse(jwtToken, func(token *jwt.Token) (interface{}, error) {
		kid, ok := token.Header["kid"].(string)
		if !ok {
			return nil, fmt.Errorf("No 'kid' header found")
		}
		key, ok := jwks.Key(kid)
		if !ok {
			return nil, fmt.Errorf("No key found for 'kid': %s", kid)
		}
		rsaKey, ok := key.(*jwk.RSAPublicKey)
		if !ok {
			return nil, fmt.Errorf("Unexpected key type: %T", key)
		}
		return rsaKey.PublicKey(), nil
	})
	if err != nil {
		log.Fatalf("Failed to parse JWT: %v", err)
	}
	if token.Valid {
		fmt.Println("JWT is valid")
		fmt.Println(token.Claims)
	} else {
		fmt.Println("JWT is invalid")
	}
}

func fetchJWKS(url string) (*jwk.Set, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	resp, err := http.DefaultClient.Do(new(http.Request).WithContext(ctx).SetURL(url))
	if err != nil {
		return nil, fmt.Errorf("Failed to fetch JWKS: %v", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("JWKS fetch error: %d %s", resp.StatusCode, http.StatusText(resp.StatusCode))
	}

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, fmt.Errorf("Failed to read JWKS response body: %v", err)
	}

	keySet, err := jwk.ParseBytes(body)
	if err != nil {
		return nil, fmt.Errorf("Failed to parse JWKS: %v", err)
	}

	return keySet, nil
}
```

In this example, the "github.com/dgrijalva/jwt-go" and "github.com/lestrrat-go/jwx/jwk" libraries are used to parse and verify the JWT and fetch the JWKS document, respectively. The fetchJWKS() function sends a GET request to the specified URL to retrieve the JWKS document, and returns a `jwk.Set

## Architecture

![glayr architecture](./img/glayr.png)