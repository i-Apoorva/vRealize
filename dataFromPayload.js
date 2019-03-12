if(payload != null) {
                var sortKeys = payload.keys.sort()
                sortKeys.forEach(function(key){
                                logProperties(key, payload.get(key), "");
                });
} else { 
                System.debug("Payload is null");
}

function logProperties(keyName, keyValue, keyParent) {
                var keyValueType = System.getObjectType(keyValue);
                if(keyValueType == "Properties") {
                                var sortKeys = keyValue.keys.sort()
                                sortKeys.forEach(function(k){
                                                logProperties(k, keyValue.get(k), keyParent+keyName+".");
                                });
                } else {
                                if(keyValue == "") {
                                                keyValue = "null";
                                }
                                System.debug(keyParent + keyName + ":"+keyValueType+": " +keyValue);
                }
}
System.log("--------------------------------------------------------------------")
System.log(payload);
System.log("--------------------------------------------------------------------")
var  machine = payload.get("machine")
System.log("--------------------------------------------------------------------")
var vmProperties = machine.get("properties")
System.log(vmProperties);
VMName= machine.get("name")


Hostname = VMName

System.log("Hostname is---->"+ Hostname);



