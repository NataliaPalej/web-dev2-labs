package dogs;

import java.io.IOException;
import java.util.ArrayList;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.ParserConfigurationException;
import org.w3c.dom.Document;
import org.w3c.dom.NodeList;
import org.w3c.dom.Element;
import org.xml.sax.SAXException;

public class Dogs {
    
    //create an array list to store the items in 
    ArrayList<DogConstructor> dogs = new ArrayList<>();
    //declare document
    Document dom;

    public static void main(String[] args) {
        Dogs dog = new Dogs();
        dog.DisplayDetails();
    }
    
    public void DisplayDetails(){
        loadXMLFile();
        parseTheDOM();
        outputData();
    }
    
    private void loadXMLFile() {
        //create DocumentBuilderFactory instance
        DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
        
        try{
            //create DocumentBuilder instance
            DocumentBuilder db = dbf.newDocumentBuilder();
            //parse xml file to dom Document
            dom = db.parse("dogsDetails.xml");
        }
        catch (IOException | ParserConfigurationException | SAXException e){
            System.out.println("Error: " + e);
        }
    }
    
    
    
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
    
    private DogConstructor getDog(Element e){
        String breed = getTextValue(e,"Breed");
        String age = getTextValue(e,"Age");
        String colour = getTextValue(e,"Colour");
        String gender = getTextValue(e,"Gender");
  
        String name = e.getAttribute("name");
        
        //create an object of class Drink
        DogConstructor d = new DogConstructor(name, breed, age, colour, gender);
        return d;
    }
    
    private void parseTheDOM(){
        Element e = dom.getDocumentElement();
        
        //get elements with a tagname "drink"
        NodeList nl = e.getElementsByTagName("Dog");
        //if list isnt empty and it not less than zero condition
        if(nl != null && nl.getLength() > 0){
            //loop through the items 
            for(int i=0; i<nl.getLength(); i++){
                Element el = (Element)nl.item(i);
                DogConstructor d = getDog(el);
                //add item to array list
                dogs.add(d);
            }
        }
    }
    
    private void outputData(){
        // Display number of items in the array
        System.out.println("No of dogs: " + dogs.size() + "\n");
  
        //loop through the array 
        for(DogConstructor dog : dogs){
        System.out.println(dog + "\n"); 
        }
    }
  
    
}
