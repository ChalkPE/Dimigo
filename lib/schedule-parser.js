/* http://dimigo.hs.kr/index.php?mid=plan&listStyle=planner&dummy=1&pYear=2016&pMonth=4 */

jQuery(document).ready(function($){
    var month = $(".planner_this").text().trim();
    console.log("<span class=\"card-title\">" + month.substring(0, month.length - 5) + "</span>");

    var firstDay = $("tr#planner_week0 > td.drop").first().index();
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    console.log("<p><table class=\"schedules centered\"><tbody>");

    $(".planner_calendar_inner").each(function(){
        //var lastDate = 0;
        var cell = $(this);

        cell.find(".schedule_view").each(function(){
            var day =  Math.floor(parseInt($(this).parent().css("left"), 10) / cell.width());
            var date = parseInt(cell.find("span.date_label").text(), 10) + day;
            if(isNaN(date)) date = day - firstDay + 1;

            var dayTag = "<td class=\"day\">" + days[day] + "</td>";
            var dateTag = "<td class=\"date\">" + date + "</td>";
            var scheduleTag = "<td>" + $(this).text().trim() + "</td>";
            //var dateTags = lastDate !== date ? (dayTag + dateTag) : "<td></td><td></td>";

            console.log("    <tr class=\"schedule\">" + dayTag + dateTag + scheduleTag + "</tr>");
            //lastDate = date;
        });
    });
    console.log("</tbody></table></p>");
});
