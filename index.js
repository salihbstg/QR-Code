import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer
  .prompt([
    {
      message: "QR oluşturmak istediğiniz linki girin",
      name: "URL",
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    const img = qr.image(url);
    img.pipe(fs.createWriteStream("qr_img.png"));
    console.log('QR Başarıyla oluşturuldu,ilgili dizindeki .png uzantılı dosyaya ulaşabilirsiniz..');
  })
  .catch((err) => {
    console.log(err);
  });
