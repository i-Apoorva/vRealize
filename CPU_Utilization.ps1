(Get-WmiObject win32_processor | Measure-Object -property LoadPercentage -Average | Select Average).average