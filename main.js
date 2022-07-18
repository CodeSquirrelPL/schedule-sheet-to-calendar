const sourceSheetName = "Copy of 07.2022_";
const sourceFileId = "1z_zU794-ISXqFRYS2MFimuE0HLouAq-uDNwSpYRVgLQ";
const month = "July";
const year = 2022;
const rowDay = 12-1;
const rowNight = 13-1;
const calendarId = 'ohjepck0tppj6b1ujt4img2vgs@group.calendar.google.com';

function myFunction() {
  const sheet = SpreadsheetApp.openById(sourceFileId)
  .getSheetByName(sourceSheetName);
  const rows = sheet.getDataRange().getValues();
  console.log(rows[rowDay]);
  console.log(rows[rowNight]);

  for (i=1; i<32; i++) {
    if (rows[rowDay][2+i]==12) addEvent(i, "day");
    if (rows[rowNight][2+i]==12) addEvent(i, "night");
  }
}

function addEvent(day, shift) {
  var dateStart;
  var dateEnd;
  if (shift=="day") {
    dateStart = new Date(month+' '+day+', '+year+' 08:00:00');
    dateEnd = new Date(month+' '+day+', '+year+' 20:00:00');
  }
  else if (shift=="night") {
    dateStart = new Date(month+' '+day+', '+year+' 20:00:00');
    dateEnd = new Date(month+' '+(day+1)+', '+year+' 08:00:00');
  }
  else return 0;

  var event = CalendarApp.getCalendarById(calendarId).createEvent('work',
    dateStart,
    dateEnd,
    );
Logger.log('Event ID: ' + event.getId());
}
