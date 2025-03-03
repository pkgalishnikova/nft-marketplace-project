
# Запуск маркетплейса с помощью Docker

1. Скачайте с Google Drive файл nft-marketplace.tar по ссылке: <https://drive.google.com/file/d/1rvz9ZBiTBxczgVCd47Y_SvOp8aTQ1TKb/view?usp=sharing>
2. В терминале из директории, которая содержит файл marketplace14transfer.tar, запустите команду:
   ```docker load --input nft-marketplace.tar```
  Файл появится в разделе Containers в приложении Docker Desktop.
3. В приложении Docker Desktop откройте терминал и введите команду
   ```docker run -p 3000:3000 nft-marketplace```
