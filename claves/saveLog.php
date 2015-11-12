<?php
$ip = $_SERVER["REMOTE_ADDR"];
$test = date("d/m/Y H:i:s").' ('.geoCheckIP($ip).')|'.$ip.' - ';
$folder = "log/".date("Y")."/".date("m");
$dirPath = $folder;
$file = "tradus.log";
if (!file_exists($dirPath)) { // add this if check  
        $result = mkdir("log", 0755);    
        if ($result == 1) {    
            echo $dirPath . " has been created";    
        } else {    
            echo $dirPath . " has NOT been created";    
        }    
        $result = mkdir("log/".date("Y"), 0755);    
        if ($result == 1) {    
            echo $dirPath . " has been created";    
        } else {    
            echo $dirPath . " has NOT been created";    
        }  
        $result = mkdir("log/".date("Y")."/".date("m"), 0755);    
        if ($result == 1) {    
            echo $dirPath . " has been created";    
        } else {    
            echo $dirPath . " has NOT been created";    
        }    
    }  

if (file_put_contents($folder."/".$file, "$test\n", FILE_APPEND)) {
	;
}
else
{
	echo "Error con el archivo".$folder."/".$file;
}/*
$result = mkdir("test", 0755);    
        if ($result == 1) {    
            echo $result . " has been created";    
        } else {    
            echo $result . " has NOT been created";    
        }  ?>*/
function geoCheckIP($ip)
 
{
 
//check, if the provided ip is valid
 
if(!filter_var($ip, FILTER_VALIDATE_IP))
 
{
 
throw new InvalidArgumentException("IP is not valid");
 
}
 
//contact ip-server
 
$response=@file_get_contents('http://www.netip.de/search?query='.$ip);
 
if (empty($response))
 
{
 
throw new InvalidArgumentException("Error contacting Geo-IP-Server");
 
}
 
//Array containing all regex-patterns necessary to extract ip-geoinfo from page
 
$patterns=array();
 
$patterns["domain"] = '#Domain: (.*?)&nbsp;#i';
 
$patterns["country"] = '#Country: (.*?)&nbsp;#i';
 
$patterns["state"] = '#State/Region: (.*?)<br#i';
 
$patterns["town"] = '#City: (.*?)<br#i';
 
//Array where results will be stored
 
$ipInfo=array();
  
//check response from ipserver for above patterns
 
foreach ($patterns as $key => $pattern)
 
{
 
//store the result in array
 
$ipInfo[$key] = preg_match($pattern,$response,$value) && !empty($value[1]) ? $value[1] : 'not found';
 
}
/*I've included the substr function for Country to exclude the abbreviation (UK, US, etc..)
To use the country abbreviation, simply modify the substr statement to:
substr($ipInfo["country"], 0, 3)
*/
$ipdata = $ipInfo["town"]. ", ".$ipInfo["state"].", ".substr($ipInfo["country"], 4);
 
return $ipdata;
 
}