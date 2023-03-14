package softdrinks;

import java.io.IOException;
import java.util.ArrayList;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.ParserConfigurationException;
import org.w3c.dom.Document;
import org.w3c.dom.NodeList;
import org.w3c.dom.Element;
import org.xml.sax.SAXException;

public class SoftDrinks {
    
    //create an array list to store the items in 
    ArrayList<Drink> drinks = new ArrayList<>();
    //declare document
    Document dom;

    //main method
    public static void main(String[] args) {
        //create instance 
        SoftDrinks display = new SoftDrinks();
        //run the methods
        display.runExample();
    }
    
    //method that runs all the below
    public void runExample(){
        loadXMLFileIntoDOM();
        parseTheDOM();
        outputData();
    }

    //method that loads XML file into DOM
    private void loadXMLFileIntoDOM() {
        //create DocumentBuilderFactory instance
        DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
        
        try{
            //create DocumentBuilder instance
            DocumentBuilder db = dbf.newDocumentBuilder();
            //parse xml file to dom Document
            dom = db.parse("softdrinks.xml");
        }
        catch (IOException | ParserConfigurationException | SAXException e){
            System.out.println("Error: " + e);
        }
    }
    
    //method that parse the DOM
    private void parseTheDOM(){
        Element e = dom.getDocumentElement();
        
        //get elements with a tagname "drink"
        NodeList nl = e.getElementsByTagName("Drink");
        //if list isnt empty and it not less than zero condition
        if(nl != null && nl.getLength() > 0){
            //loop through the items 
            for(int i=0; i<nl.getLength(); i++){
                Element el = (Element)nl.item(i);
                Drink d = getDrink(el);
                //add item to array list
                drinks.add(d);
            }
        }
    }
    
    //method to get text from file
    private String getTextValue(Element e, String tagName){
        //declare textValue 
        String textVal = null;
        //get element by tagName
        NodeList nl = e.getElementsByTagName(tagName);
        //condition if list not empty
        if(nl!=null && nl.getLength() > 0){
            Element el = (Element)nl.item(0);
            textVal=el.getFirstChild().getNodeValue();
        }
        return textVal;
    }
    
    //method to get items details based on method above
    private Drink getDrink(Element e){
        String company = getTextValue(e,"Company");
        String colour = getTextValue(e,"Colour");
        int qty = Integer.parseInt(getTextValue(e, "Qty"));
        
        String name = e.getAttribute("name");
        
        //create an object of class Drink
        Drink d = new Drink(name, company, colour, qty);
        return d;
    }
  
    private void outputData(){
        // Display number of items in the array
        System.out.println("No of drinks: " + drinks.size());
  
        //loop through the array 
        for(Drink drink : drinks){
        System.out.println(drink + "\n"); 
        }
    }
    
}
