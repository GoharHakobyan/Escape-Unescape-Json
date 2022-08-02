$(document).ready(function () {
  $("#escape").click(function () {
    let area1 = $("#escapeArea")
      .val()
      .replace(/[\\]/g, "\\\\")
      .replace(/[\"]/g, '\\"')
      .replace(/[\/]/g, "\\/")
      .replace(/[\b]/g, "\\b")
      .replace(/[\f]/g, "\\f")
      .replace(/[\n]/g, "\\r\\n")
      .replace(/[\t]/g, "\\t");

    $("#unescapeArea").val(area1);
    $("#escapeArea").attr("placeholder", "JSON is escaped").val("");
  });

  $("#unescpe").click(function () {
    let area2 = $("#unescapeArea")
      .val()
      .replaceAll('\\\\"', /\\/)
      .replaceAll('\\"', '"')
      .replaceAll("\\/", " ")
      .replaceAll("\\b", "\b")
      .replaceAll("\\f", "\f")
      .replaceAll("\\r\\n", "\n")
      .replaceAll("\\t", "\t");

    $("#escapeArea").val(area2);
    $("#unescapeArea").attr("placeholder", "JSON is unescaped").val("");
  });

  $("textarea").keydown(function (e) {
    if (e.keyCode == 9) {
      e.preventDefault();
      let valueStart = this.selectionStart;
      let valueEnd = this.selectionEnd;
      let value = $(this).val();
      let selectText = value.substring(valueStart, valueEnd);
      $(this).val(
        value.substring(0, valueStart) + "\t" + selectText.replace(/\n/g, "\n\t") + value.substring(valueEnd),
      );
      this.selectionStart = this.selectionEnd = valueStart + 1;
    }
  });
});

// JSON
// {
// "employees":["John", "Anna", "Peter"]
// }
