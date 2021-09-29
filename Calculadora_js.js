var NumeroInicial = 0;
        var Numerofinal = 0;
        var addTrue = false;
        var mulTrue = false;
        var repeatSquare = false;
        var resultado =0;

        /*
        var validar = () => {
            let num = document.getElementById("pantalla");
            const message = document.getElementById("p01");
            message.innerHTML = "";
            try {
                if(isNaN(num.value)) throw "Error al introducir los datos. Vuelva a intentarlo";
                num.value = Number(num.value)
            }
            catch(err) {
                message.innerHTML =  err
}
}
        */
        function add(){
            //validar();
            NumeroInicial = parseFloat(document.getElementById("number").value);
            addTrue = true;
            repeatSquare = false;
            //alert("Value of 'addTrue' outside the function " + addTrue)
        }

        function mul(){
            NumeroInicial = parseFloat(document.getElementById("number").value);
            mulTrue = true;
            repeatSquare = false;
        }
    
        function eq(){
            
            if (addTrue){
                Numerofinal = parseFloat(document.getElementById("number").value);
                var result = Numerofinal + NumeroInicial;
                document.getElementById("answer").innerHTML = result;
                addTrue = false;
            } else if (mulTrue){
                Numerofinal = parseFloat(document.getElementById("number").value);
                var result = NumeroInicial * Numerofinal;
                document.getElementById("answer").innerHTML = result;
                mulTrue = false; 
            }
            Numerofinal = parseFloat(document.getElementById("answer").value);
            repeatSquare = false;
        }    
    

        function sumatorio(){
            var sumatorioValue = 0;
            
            var inputValue = document.getElementById("number").value;
            
            var ArrayInput = inputValue.split(",");

            ArrayInput = Array.from(ArrayInput);

            ArrayInput = ArrayInput.map(function (x){
                return parseFloat(x,10);
            })


            sumatorioValue = ArrayInput.reduce((a,b) => a+b,0);
            document.getElementById("answer").innerHTML = sumatorioValue;
            repeatSquare = false;
        }


        function ordenar(){
            var inputValue = document.getElementById("number").value;
            
            var ArrayInput = inputValue.split(",");

            ArrayInput = Array.from(ArrayInput);

            ArrayInput = ArrayInput.map(function (x){
                return parseFloat(x,10);
            })

            var result = ArrayInput.sort((a,b) => a-b);
            document.getElementById("answer").innerHTML = result;
            repeatSquare = false;
        }


        function revertir(){
            var inputValue = document.getElementById("number").value;
            
            var ArrayInput = inputValue.split(",");

            ArrayInput = Array.from(ArrayInput);

            ArrayInput = ArrayInput.map(function (x){
                return parseFloat(x,10);
            })

            var result = ArrayInput.reverse();
            document.getElementById("answer").innerHTML = result;
            repeatSquare = false;
        


        }


        function quitar(){

            var inputValue = document.getElementById("number").value;
            
            var ArrayInput = inputValue.split(",");

            ArrayInput = Array.from(ArrayInput);

            ArrayInput = ArrayInput.map(function (x){
                return parseFloat(x,10);
            })

            ArrayInput.pop();
            document.getElementById("answer").innerHTML = ArrayInput;
            repeatSquare = false;
        }


        function square(){

            if (repeatSquare == false){
            var num = parseFloat(document.getElementById("number").value);
            var result=num*num;
            document.getElementById("answer").innerHTML = result;
            resultado = result;
            
            }else if(repeatSquare == true){
            
            //var num = document.getElementById("answer").value;
            //alert(typeof num);
            var result= resultado*resultado;
            document.getElementById("answer").innerHTML = result;
            resultado = result;
            }
            repeatSquare = true;
        }
    

    
        function mod(){
            var num = parseFloat(document.getElementById("number").value);
            if(num >= 0){
                var result = num;
                document.getElementById("answer").innerHTML= result;
            }else{
                var result = num * -1;
                document.getElementById("answer").innerHTML = result;
            }
            repeatSquare = false;
        }

        function factorial(){
            var total = 1;
            var num = parseFloat(document.getElementById("number").value)
            for (i = 1; i <= num; i++){
                total = total * i
            }
            document.getElementById("answer").innerHTML = total;
            repeatSquare = false;
        }