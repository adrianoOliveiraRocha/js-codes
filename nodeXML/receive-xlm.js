var parseString = require('xml2js').parseString;
var xml = `
<person>
    <name>July Watson</name>
    <age>21</age>
    <regist>90876542566</regist>
</person>`;
parseString(xml, function(err, result) {
    if (err) throw new Error(err);
    else console.log(result);
});