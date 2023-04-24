function addToResult(value) {
    document.getElementById('result').value += value;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function backspace() {
    var result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
  }
  
  function calculate() {
    var result = document.getElementById('result');
    var expression = result.value;
    var answer = eval(expression);
    result.value = answer;
  }
  