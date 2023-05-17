package instagram;
import java.util.Scanner;
public class Usuario {
    
    
    
    Scanner lectura = new Scanner(System.in);

    private String name;
    private String lastname;
    private String mail;
    private int num;
    private String user;
    private String password;
    

   static Usuario usuario1 = new Usuario();
    
    public void crearUsuario(){

        

        System.out.println("Ingrese su nombre");
         name = lectura.nextLine();
        System.out.println("Ingrese su apellido");
        lastname = lectura.nextLine();
        System.out.println("Ingrese su correo");
        mail = lectura.nextLine();
        System.out.println("Ingrese su numero");
        num = lectura.nextInt();
        lectura.nextLine();
        System.out.println("Ingrese su usuario");
        user = lectura.nextLine();
        System.out.println("ingrese su contraseña");
        password = lectura.nextLine();
  
    }

   

    public void validarUsuario(){

        String confirmUser;
        String confirPassword;

        System.out.println("Confirme su usuario");
        confirmUser = lectura.nextLine();

        System.out.println("Confirme su contraseña");
        confirPassword = lectura.nextLine();
       

        if (confirPassword.equals(password) && confirmUser.equals(user)){
            
            System.out.println("Bienvenido al sistema");
        }else{
            System.out.println("Acceso denegado");
        }

    }

    public void mostrarUsuario(){

        System.out.println("Su nombre es: " + name);
        System.out.println("Su apellido es: " + lastname);
        System.out.println("Su mail es: " + mail);
        System.out.println("Su numero es: " + num);
        System.out.println("Su usuario es: " + user);
        System.out.println("Su contraseña es: " + password);
    }

      public static void main(String[] args) {
        usuario1.crearUsuario();
        usuario1.validarUsuario();
        usuario1.mostrarUsuario();
    }

        
}
































     
   

   

   


