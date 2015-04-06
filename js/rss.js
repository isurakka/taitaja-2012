var $j = jQuery.noConflict();

$j(document).ready(function() {
    loadRSS();
});

function loadRSS()
{
    var elet = $j(".tuoteLista");
    if (elet.length > 0)
    {
        elet.each(function(e)
        {
            e.innerHTML = "Ladataan tuotteita...";
        });
        
        $j.ajax({
            type: "GET",
            url: "rss.xml",
            dataType: "xml",
            success: function(doc)
            {
                insertRSS(doc);
            }
        });
    }
}

function insertRSS(doc)
{
    var html = "<table>";
    html += "<th>Tuotekoodi</th><th>Nimi</th><th>Hinta</th><th>Varastossa</th>";
    add = ["", "", " €", " kpl"];
    
    var toFind = ["guid", "title", "hinta", "varastossa"];
    
    $j(doc).find('item').each(function(k1, v1) 
    { 
        html += "<tr>";
        $j.each(toFind, function(k2, v2)
        {
            if (v2 == "title")
            {   
                html += "<td class='rssData' onClick=\"setHash(\'" + $j(v1).find(v2).text().toLowerCase() + "')\">" + $j(v1).find(v2).text() + add[k2] + "</td>";
                return;
            }
            html += "<td class='rssData'>" + $j(v1).find(v2).text() + add[k2] + "</td>";
        });
        html += "</tr>";
    });
    html += "</table>";
    
    $j(".tuoteLista").each(function(k, e)
    {
        e.innerHTML = html;
    });
}

