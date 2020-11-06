const request = request('request');
var xml = `
<checkout>
    <sender>
        <name>Jose Comprador</name>
        <email>c13852685437790609596@sandbox.pagseguro.com.br</email>
        <phone>
            <areaCode>85</areaCode>
            <number>999999999</number>
        </phone>
        <documents>
            <document>
                <type>CPF</type>
                <value>11475714734</value>
            </document>
        </documents>
    </sender>
    <items>
        <item>
            <id>0001</id>
            <description>Assinatura no Sistema Combinado</description>
            <amount>9.45</amount>
            <quantity>1</quantity>
            <weight>0</weight>
        </item>
    </items>
    <redirectURL>http://lojamodelo.com.br/return.html</redirectURL>
    <shipping>
        <addressRequired>false</addressRequired>
    </shipping>
    <receiver>
        <email>adriano.qwe32@yahoo.com.br</email>
    </receiver>

</checkout>
`;

var options = {
    "method": "POST",
    "url": "https://ws.sandbox.pagseguro.uol.com.br/pre-approvals/request?email=myemail&token=mytoken",
    "hedears": {
        "Content-type": "application/xml; charset=ISO-8859-1",
        "Accept": "application/vnd.pagseguro.com.br.v3+json;charset=ISO-8859-1"
    },

    body: xml,

}

request(options, function(err, response, bady) {
    if (error) throw new Error(error);
    console.log(response);
    console.log(body);
});