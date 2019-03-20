$Servers = Get-Content "E:\Apoorva\Servers.txt"
$Array = @()
 
ForEach ($Server in $Servers) {
$Server=$Server.Trim()
$Array += $Server
}

ForEach ($x in $Array) {
$x
}
