function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6TwHtOOjCAz":
        Script1();
        break;
      case "623Y0pAStrh":
        Script2();
        break;
      case "60hPgXFWjTL":
        Script3();
        break;
      case "5t8XbMz6r5p":
        Script4();
        break;
      case "6adL4qhoDZ9":
        Script5();
        break;
      case "6OuQKn9EGMW":
        Script6();
        break;
      case "5XHuOL2UVYF":
        Script7();
        break;
      case "5uSfuv6IO9t":
        Script8();
        break;
      case "5fHzmcK3mQf":
        Script9();
        break;
      case "5nhfPnuEila":
        Script10();
        break;
      case "5bQ1hT8gMAI":
        Script11();
        break;
      case "6OSMBeKiaxz":
        Script12();
        break;
      case "6nYBitUW4on":
        Script13();
        break;
      case "6ZGQdCMDNFZ":
        Script14();
        break;
      case "6gzVo0U8sFf":
        Script15();
        break;
      case "5gowONOl7hA":
        Script16();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  $("#tab-customlink").hide();
}

function Script3()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  $("#tab-customlink").hide();
}

function Script6()
{
  $("#tab-customlink").hide();
}

function Script7()
{
  $("#tab-customlink").hide();
}

function Script8()
{
  $("#tab-customlink").hide();
}

function Script9()
{
  $("#tab-customlink").hide();
}

function Script10()
{
  $("#tab-customlink").hide();
}

function Script11()
{
  $("#tab-customlink").hide();
}

function Script12()
{
  $("#tab-customlink").hide();
}

function Script13()
{
  $("#tab-customlink").hide();
}

function Script14()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script15()
{
  $("#tab-customlink").show();
}

function Script16()
{
  window.print();
}

