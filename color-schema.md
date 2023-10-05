Dark Dark Blue (Background, Logo Background):
RGB: 3, 26, 41
Hex: #031A29

Light Dark Blue (Header):
RGB: 0, 42, 66
Hex: #002A42

Primary (Link, Card Background):
RGB: 187, 200, 238
Hex: #BBC8EE

White:
RGB: 251, 253, 251
Hex: #FBFDFB

Bright Green:
RGB: 168, 254, 160
Hex: #A8FEA0

Yellow:
RGB: 249, 248, 113
Hex: #F9F871

Pink:
RGB: 238, 185, 193
Hex: #EEB9C1

Rose:
RGB: 207, 122, 137
Hex: #CF7A89

```jsx
        {
          LOGO_IMAGE.enable ? (
            <img
              src={LOGO_IMAGE.svg ? "/assets/logo.svg" : "/assets/logo.png"}
              alt="AstroPaper Logo"
              width={LOGO_IMAGE.width}
              height={LOGO_IMAGE.height}
            />
          ) : (
            SITE.title
          )
        }
```
  