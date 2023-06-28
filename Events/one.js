<script>
  function convertImageToString() {
    const input = document.getElementById('imageInput');
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
      const img = new Image();
      img.onload = function() {
        Tesseract.recognize(img)
          .then(function(result) {
            const text = result.data.text;
            console.log(text); // or display the text in the HTML
          })
          .catch(function(error) {
            console.error(error);
          });
      };
      img.src = e.target.result;
    };

    reader.readAsDataURL(file);
  }
</script>
