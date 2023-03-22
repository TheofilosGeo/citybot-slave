radio.onReceivedString(function (receivedString) {
    if (receivedString == "tmp") {
        value = Environment.octopus_BME280(Environment.BME280_state.BME280_temperature_C)
    } else if (receivedString == "hum") {
        value = Environment.octopus_BME280(Environment.BME280_state.BME280_humidity)
    } else if (receivedString == "hpa") {
        value = Environment.octopus_BME280(Environment.BME280_state.BME280_pressure)
    } else if (receivedString == "umv") {
        value = Environment.UVLevel(AnalogPin.P4)
    } else if (receivedString == "dbm") {
        value = Environment.ReadNoise(AnalogPin.P1)
    } else if (receivedString == "lvl") {
        TankDistance = sonar.ping(
        DigitalPin.P15,
        DigitalPin.P14,
        PingUnit.Centimeters
        )
        while (TankDistance == 0) {
            TankDistance = sonar.ping(
            DigitalPin.P15,
            DigitalPin.P14,
            PingUnit.Centimeters
            )
        }
        if (TankDistance <= 4) {
            value = 1
        } else if (TankDistance <= 7) {
            value = 2
        } else {
            value = 3
        }
    } else if (receivedString == "rnp") {
        value = pins.analogReadPin(AnalogPin.P0) * 3.3 / 1023
    }
    radio.sendNumber(value)
})
let TankDistance = 0
let value = 0
basic.showIcon(IconNames.Yes)
radio.setGroup(167)
