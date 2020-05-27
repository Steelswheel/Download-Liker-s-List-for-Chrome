const arr = document.querySelectorAll("a[href^=\"https://instagram.com/\"]");

const downloadAsFile = (data) => {

  data = Array.from(data);

  let ar = data.reduce((sum, cur) => {
    let x = '@' + cur.href.slice(22) + ' \r\n';
    return sum + x;
  }, 0);

  ar = ar.slice(1);

  let a = document.createElement("a");
  let file = new Blob([ar], {type: 'text/plain'});
  a.href = URL.createObjectURL(file);
  a.download = "get.txt";
  a.click();
};

downloadAsFile(arr);
