package employees;

// Make necessary imports
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;
import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

public class EmployeesSAXParser extends DefaultHandler {
    
    // initialize variables
    private ArrayList<Employee> employeeList = new ArrayList<Employee>();
    private String tempVal;
    private Employee tempEmp;
    
    public static void main(String[] args){
        EmployeesSAXParser mySAXParser = new EmployeesSAXParser();
        mySAXParser.runExample();
    }
    
    // parse document
    public void parseDocument(){
        SAXParserFactory spf = SAXParserFactory.newInstance();
        try{
            SAXParser sp = spf.newSAXParser();
            sp.parse("employees.xml", this);
        }
        catch (IOException | ParserConfigurationException | SAXException e) {
            System.out.println("Error Cought! " + e);
        }
    }
    
    // iterate through the list and print the output
    public void outputList(){
        for(Employee employee : employeeList ){
            System.out.println(employee);
        }
    }
   
    // run the code
    public void runExample(){
    parseDocument();
    outputList();
    }
    
    /* Event Handlers */
    @Override
    public void startElement(String uri, String localName, String qName, Attributes attributes) throws SAXException {
        // reset
        tempVal = " ";
        if (qName.equalsIgnoreCase("Employee")){
            // create new instance of employee
            tempEmp = new Employee();
            tempEmp.setType(attributes.getValue("type"));
        }
        //System.out.println("Test Print ::: startElement \n\tlocalName == " + localName + "\n\tqName == " + qName);
    }
    
    @Override
    // get text from the file
    public void characters(char[] ch, int start, int length) throws SAXException{
        tempVal = new String(ch, start, length);
        //System.out.println("TestPrint ::: charactersMethod == " + tempVal);
    }
    
    @Override
    public void endElement(String uri, String localName, String qName) throws SAXException{
        //System.out.println("TestPrint ::: endElemenet");
        if (qName.equalsIgnoreCase("Employee")){
            employeeList.add(tempEmp);
        }
        else if (qName.equalsIgnoreCase("Name")){
            tempEmp.setName(tempVal);
        }
        else if (qName.equalsIgnoreCase("Id")){
            tempEmp.setId(Integer.parseInt(tempVal));
        }
        else if (qName.equalsIgnoreCase("Age")){
            tempEmp.setAge(Integer.parseInt(tempVal));
        }
    }
    
    /* End of Event Handlers */
}


