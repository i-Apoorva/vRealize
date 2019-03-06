//prepare request
//Do not edit 
var inParamtersValues = [IncidentNumber];
var request = restOperation.createRequest(inParamtersValues, null);
//set the request content type
request.contentType = "";
System.log("Request: " + request);
System.log("Request URL: " + request.fullUrl);

//Customize the request here
//request.setHeader("headerName", "headerValue");

//execute request
//Do not edit 
var response = request.execute();
//prepare output parameters
System.log("Response: " + response);
statusCode = response.statusCode;
statusCodeAttribute = statusCode;
System.log("Status code: " + statusCode);
contentLength = response.contentLength;
headers = response.getAllHeaders();
contentAsString = response.contentAsString;
var sysOut= JSON.parse(contentAsString);
var sys_id= sysOut.result[0].sys_id;
System.log(sys_id);
System.log("Content as string: " + contentAsString);