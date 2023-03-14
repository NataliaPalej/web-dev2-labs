package softdrinks;

public class Drink {
    
    //declare variables
    private String name, company, colour;
    private int qty;
    
    public Drink(String name, String company, String colour, int qty){
        this.name = name;
        this.company = company;
        this.colour = colour;
        this.qty = qty;
    }
    
    //customised toString method
    @Override
    public String toString(){
        StringBuffer sb = new StringBuffer();
        sb.append("Drink Details:\nName: " + name + "\nCompany: " + company + "\nColour: " + colour + "\nQty: " + qty);
        return sb.toString();
    }
}
