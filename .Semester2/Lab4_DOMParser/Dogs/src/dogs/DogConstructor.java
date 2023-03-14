package dogs;

public class DogConstructor {
    
    //declare variables
    private String name, breed, age, colour, gender;
    
    public DogConstructor(String name, String breed, String age, String colour, String gender){
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.colour = colour;
        this.gender = gender;
    }
    
    //customised toString method
    @Override
    public String toString(){
        StringBuffer sb = new StringBuffer();
        sb.append("Drink Details:\nName: " + name + "\nCompany: " + breed + "\nColour: " 
                + age + "\nQty: " + colour + "\nGender: " + gender);
        return sb.toString();
    }
    
}
