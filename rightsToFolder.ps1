$acl = Get-Acl C:\Apoorva

$AccessRule = New-Object System.Security.AccessControl.FileSystemAccessRule("AUTONOMICS\apoorva-a","FullControl","Allow")

$acl.SetAccessRule($AccessRule)

$acl | Set-Acl C:\Apoorva