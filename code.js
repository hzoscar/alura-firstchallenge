        const textarea = document.querySelector('textarea');
        textarea.addEventListener('keyup', e=>{
            textarea.style.height = '48px';
            let x = e.target.scrollHeight;
            textarea.style.height = `${x}px`;
            });
        
        function contarCaracteres(obj){
            if (obj.value.length == 250){
                alert('No es posible insertar más caracteres')
            }                        
        }
        function habilitarBoton_encriptar(entrada_texto){
            var boton = document.getElementById('btn_encriptar')
            if(entrada_texto.value != ""){
                boton.disabled = false;                            
            }
            else{
                boton.disabled = true;
                }
            }
        function habilitarBoton_desencriptar(entrada_texto){
            var boton = document.getElementById('btn_desencriptar')
            if(entrada_texto.value != ""){
                boton.disabled = false;                            
            }
            else{
                boton.disabled = true;
            } 
        }    
          
        const dict = {a:'ai',e:'enter',i:'imes',o:'ober',u:'ufat'};
                                                      
        function codificarTexto(){
            var texto = document.getElementById('entrada_texto').value;

            var pat = /^.{0}$|^[0-9a-z\s]+$/;

            if(pat.test(texto)==true){
                var nueva_lista = []
                for (letra in texto){
                    if (!(texto[letra] in dict)){
                        nueva_lista.push(texto[letra]);
                    }
                    else {
                        nueva_lista.push(dict[texto[letra]]);
                    }
                }
                var codificador_cadena = nueva_lista.toString();
                var codificador = codificador_cadena.replace(/,/g,'');
                            
                document.getElementById('contenido-rectangulo').hidden= true;                        
                document.getElementById('rectangulo-respuesta').hidden=false;                        
                document.getElementById("salida_texto").value=codificador;
                document.getElementById('btn_desencriptar').disabled=true

                if (document.getElementById('entrada_texto').value=='' && document.getElementById('salida_texto').value == ''){

                    document.getElementById('contenido-rectangulo').hidden= false;                        
                    document.getElementById('rectangulo-respuesta').hidden= true;
                }
            }
            else{
                alert('No deben ser utilizadas letras mayúscula, letras con acentos ni caracteres especiales')
            }
        }     
                   
        var button1 = document.getElementById('btn_encriptar');
        button1.onclick = codificarTexto;        
        
        function copiar(){                      
            var copiarTexto = document.getElementById("salida_texto");
            copiarTexto.select()                       
            navigator.clipboard.writeText(copiarTexto.value);
            document.getElementById('btn_desencriptar').disabled=false                       
        }        
       
        const dict_inverso = {'ai':'a','enter':'e','imes':'i','ober':'o','ufat':'u'}
        const lista_vocales = ['a','e','i','o','u']
           
        function descodificarTexto(){

            var texto_codificado = document.getElementById('entrada_texto').value;

            var pat = /^.{0}$|^[0-9a-z\s]+$/;

                if(pat.test(texto_codificado)==true){
    
                    var lista_codificada = []
                    for (letra in texto_codificado){
                        lista_codificada.push(texto_codificado[letra])
                    }

                    nueva_lista_codificada = []

                    contador = 0
                    for (letra in lista_codificada){
                        
                        if (lista_codificada[letra] =='o' && lista_codificada.length > (contador + 3)){
                            
                            if (lista_codificada[contador+1]== 'b' && lista_codificada[contador+2] == 'e' && lista_codificada[contador+3] == 'r'){
                                lista_codificada.splice(contador+1,3)
                                nueva_lista_codificada.push('o')
                                contador +=1
                            }    
                        }
                        else if (lista_codificada[letra]=='a' && lista_codificada.length > (contador + 1)){

                            if (lista_codificada[contador+1] == 'i'){
                                lista_codificada.splice(contador+1,1)
                                nueva_lista_codificada.push('a')
                                contador +=1
                            }
                        }
                        else if (lista_codificada[letra]=='e' && lista_codificada.length > (contador + 4)){
                            
                            if (lista_codificada[contador+1]== 'n' && lista_codificada[contador+2]== 't' && lista_codificada[contador+3] == 'e' && lista_codificada[contador+4]== 'r') {
                                lista_codificada.splice(contador+1,4)
                                nueva_lista_codificada.push('e')
                                contador +=1
                            }
                        }
                        else if (lista_codificada[letra] =='i' && lista_codificada.length > (contador + 3)){
                    
                            if (lista_codificada[contador+1]== 'm' && lista_codificada[contador+2]== 'e' && lista_codificada[contador+3]== 's'){
                                lista_codificada.splice(contador+1,3)
                                nueva_lista_codificada.push('i')
                                contador +=1
                            }
                        }
                        else if (lista_codificada[letra]=='u' && lista_codificada.length > (contador + 3)){
                    
                            if (lista_codificada[contador+1]== 'f' && lista_codificada[contador+2]== 'a' && lista_codificada[contador+3]== 't'){
                                lista_codificada.splice(contador+1,3)
                                nueva_lista_codificada.push('u')
                                contador +=1
                            }            
                        }
                        else{
                            nueva_lista_codificada.push(lista_codificada[letra])
                            contador +=1
                        }

                    }
                let descodificador_cadena = nueva_lista_codificada.toString();
                let descodificador = descodificador_cadena.replace(/,/g,'');
                document.getElementById('salida_texto').value=descodificador;
                document.getElementById('contenido-rectangulo').hidden= true;                        
                document.getElementById('rectangulo-respuesta').hidden=false;
                document.getElementById('entrada_texto').value=''

                if (document.getElementById('entrada_texto').value=='' && document.getElementById("salida_texto").value == ''){

                
                    document.getElementById('contenido-rectangulo').hidden= false;                        
                    document.getElementById('rectangulo-respuesta').hidden= true;
                }
            }
            else{
                alert('No deben ser utilizadas letras mayúscula, letras con acentos ni caracteres especiales')
            }
    }

    var button2 = document.getElementById('btn_desencriptar');
        button2.onclick = descodificarTexto;               
    