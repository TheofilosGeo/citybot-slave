radio.onReceivedNumber(function (receivedNumber) {
    SensorValue = receivedNumber
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "tmp") {
        value = Environment.octopus_BME280(Environment.BME280_state.BME280_temperature_C)
        radio.sendNumber(value)
    } else if (receivedString == "hum") {
        value = Environment.octopus_BME280(Environment.BME280_state.BME280_humidity)
        radio.sendNumber(value)
    } else if (receivedString == "hpa") {
        value = Environment.octopus_BME280(Environment.BME280_state.BME280_pressure)
        radio.sendNumber(value)
    } else if (receivedString == "umv") {
        value = Environment.UVLevel(AnalogPin.P4)
        radio.sendNumber(value)
    } else if (receivedString == "dbm") {
        value = Environment.ReadNoise(AnalogPin.P1)
        radio.sendNumber(value)
    } else if (receivedString == "lvl") {
    	
    } else if (receivedString == "rnp") {
    	
    }
})
let value = 0
let SensorValue = 0
basic.showIcon(IconNames.Yes)
radio.setGroup(1)
