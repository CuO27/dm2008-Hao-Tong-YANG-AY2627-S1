# Sensor Jam Template

A p5.js sketch that receives sensor data from an Arduino over USB (Web Serial) and uses it to change a visual. Use it with the Week 9 Arduino activities.

_Rename the main folder when you duplicate this for your own projects!_

## Setup

1. **Arduino:** upload your sketch (e.g. `activity_9a`). Each reading must be on its own line and start with a number, e.g. `Serial.println(distVal);`. Lines that don't start with a number (like `Brightness: 120` in `activity_9a`) are ignored.
2. **Close the Arduino Serial Monitor.** Only one program can use the port at a time.
3. **Run this folder with a local server** (e.g. VS Code Live Server), then open it in **Chrome or Edge**. Safari and Firefox don't support Web Serial.
4. Click **Connect to Arduino**, choose your board's port, and move your hand in front of the sensor.

## Troubleshooting

| Problem | Likely cause |
| --- | --- |
| No port appears in the list | Wrong cable (charge-only), board not plugged in, or wrong browser |
| "Port busy" / can't connect | Serial Monitor (or another tab) still has the port open |
| Nothing logs in the console | Baud rate mismatch: Arduino `Serial.begin(9600)` must match `port.open(9600)` |
| Circle doesn't change | Arduino isn't sending a number first on each line, or the values are outside the 5-100 range mapped in `sketch.js` |
| Movement feels jumpy | Use Option 2 (`lerp`) in `sketch.js`, or lower the Arduino `delay()` |

## Your project notes

- We use ultrasonic sensor to detect users distance with the arduino.
- We create the repeating ellipse pattern on the screen, alternating between blue and pink.
- When users become closer to the sensor, the ellipses will gradually become bigger and the transparency of pattern will also changes according to the distance. (The greater the distance, the more transparent the pattern.)


---
