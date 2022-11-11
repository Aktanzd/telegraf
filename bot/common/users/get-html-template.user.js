exports.getHTMLTemplate = (content) => {
    return `<!DOCTYPE html>
    <html lang="ru">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Users</title>
            <style>
            table {
              border-spacing: 0 10px;
              font-family: 'Open Sans', sans-serif;
              font-weight: bold;
              }
              th {
              padding: 10px 20px;
              background: #56433D;
              color: #F9C941;
              border-right: 2px solid; 
              font-size: 0.9em;
              }
              th:first-child {
              text-align: left;
              }
              th:last-child {
              border-right: none;
              }
              td {
              vertical-align: middle;
              padding: 10px;
              font-size: 14px;
              text-align: center;
              border-top: 2px solid #56433D;
              border-bottom: 2px solid #56433D;
              border-right: 2px solid #56433D;
              }
              td:first-child {
              border-left: 2px solid #56433D;
              border-right: none;
              }
              td:nth-child(2){
              text-align: left;
              }
            </style>
      </head>
      <body>
      <table>
        <tr>
          <th>№</th>
          <th>Логин</th>
          <th>Имя пользователя</th>
          <th>Время регистрации</th>
        </tr>
        ${content}
      </table>
      
      </body>
    </html>`;
};
