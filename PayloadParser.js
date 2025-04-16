function parseUplink(device, payload)
{

    var parsed = payload.asParsedObject();   
    env.log(parsed); 


    // Store distance

    if(parsed.Distance != null){
        var sensor1 = device.endpoints.byAddress("1");

        if (sensor1 != null)
            sensor1.updateGenericSensorStatus(parsed.Distance);
    };

    // Store temperature

    if(parsed.Temp != null){
        var sensor2 = device.endpoints.byAddress("2");

        if (sensor2 != null)
            sensor2.updateTemperatureSensorStatus(parsed.Temp);
    };

    // Store battery
    if(parsed.bat_V  != null){
        var sensor3 = device.endpoints.byAddress("3");

        if (sensor3 != null)
            sensor3.updateGenericSensorStatus(parsed.bat_V);
    };
        if(parsed.Distance != null){
        var sensor4 = device.endpoints.byAddress("4");
        var y = (2*Math.acos(((21-(parsed.Distance)/25.4)/21)));
        var vm = ((0.5*21*21*(y-Math.sin(y)*48))/231);
        var vt = 300 - vm;
        if (sensor4 != null)
            sensor4.updateGenericSensorStatus(vt);
    }

}

/*
{
        "Attempt": 0,
        "Avg_Energy": 47,
        "Bkgnd_Noise": 4,
        "Checksum": 252,
        "Distance": 0.19,
        "Distance_code": 0,
        "Distance_valid": true,
        "Eng": 0,
        "Msg_type": "READING",
        "Op_Mode": "ACTIVE",
        "Protocol": "D",
        "Reset_Cnt": 11264,
        "Reset_Ind": 3,
        "Sens_Health": 0,
        "Sens_Type": "US 150 KHz",
        "Temp": 21.5,
        "Temp_valid": true,
        "Tilt": 1.2000000000000002,
        "Tilt_valid": true,
        "bat_V": 3.9000000000000004,
        "bat_V_valid": true,
        "fw_id": "RFU",
        "fw_ver": "306.1808.248",
        "msg_ID": 48,
        "msg_reas": "USER REQ (BLE)",
        "r_reas": "POWER UP",
        "read_res": "OK",
        "t_restart": 2421240,
        "w_reas": "UNK"
      },

*/


function buildDownlink(device, endpoint, command, payload) 
{ 
	// This function allows you to convert a command from the platform 
	// into a payload to be sent to the device.
	// Learn more at https://wiki.cloud.studio/page/200

	// The parameters in this function are:
	// - device: object representing the device to which the command will
	//   be sent. 
	// - endpoint: endpoint object representing the endpoint to which the 
	//   command will be sent. May be null if the command is to be sent to 
	//   the device, and not to an individual endpoint within the device.
	// - command: object containing the command that needs to be sent. More
	//   information at https://wiki.cloud.studio/page/1195.

	// This example is written assuming a device that contains a single endpoint, 
	// of type appliance, that can be turned on, off, and toggled. 
	// It is assumed that a single byte must be sent in the payload, 
	// which indicates the type of operation.

/*
	 payload.port = 25; 	 	 // This device receives commands on LoRaWAN port 25 
	 payload.buildResult = downlinkBuildResult.ok; 

	 switch (command.type) { 
	 	 case commandType.onOff: 
	 	 	 switch (command.onOff.type) { 
	 	 	 	 case onOffCommandType.turnOn: 
	 	 	 	 	 payload.setAsBytes([30]); 	 	 // Command ID 30 is "turn on" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.turnOff: 
	 	 	 	 	 payload.setAsBytes([31]); 	 	 // Command ID 31 is "turn off" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.toggle: 
	 	 	 	 	 payload.setAsBytes([32]); 	 	 // Command ID 32 is "toggle" 
	 	 	 	 	 break; 
	 	 	 	 default: 
	 	 	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 	 	 break; 
	 	 	 } 
	 	 	 break; 
	 	 default: 
	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 break; 
	 }
*/

}