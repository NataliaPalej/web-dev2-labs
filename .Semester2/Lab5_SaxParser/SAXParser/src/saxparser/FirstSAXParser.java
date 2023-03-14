package saxparser;

// Make necessary imports
import java.io.File;
import java.io.IOException;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;
import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

public class FirstSAXParser extends DefaultHandler {

    // declare variables 
    boolean bFirstName, bLastName, bNickName, bMarks = false;

    public static void main(String[] args) {
        try {
            // create file object
            File inputFile = new File("input.xml");
            // create SAXParserFactory and SAXParser object
            SAXParserFactory spf = SAXParserFactory.newInstance();
            SAXParser sp = spf.newSAXParser();
            // create class object
            FirstSAXParser myFirstSAX = new FirstSAXParser();
            System.out.println("Print To Test ::: saxparser.FirstSAXParser.main()");
            System.out.println();
            // parse using file reference and class reference
            sp.parse(inputFile, myFirstSAX);
            
        }
        // catch any errors
        catch (IOException | ParserConfigurationException | SAXException e){
            System.out.println("Error Cought!\n" + e);
        }
    }

    @Override
    public void startElement(String uri, String localName, String qName, Attributes attributes) throws SAXException {
        //go through the file and read it
        if (qName.equalsIgnoreCase("student")){
            // get attribute of student called roll number
            String rollNo = attributes.getValue("rollno");
            System.out.println("Roll No: " + rollNo);
        }
        else if (qName.equalsIgnoreCase("firstname")){
            bFirstName = true;
        }
        else if (qName.equalsIgnoreCase("lastname")){
            bLastName = true;
        }
        else if (qName.equalsIgnoreCase("nickname")){
            bNickName = true;
        }
        else if (qName.equalsIgnoreCase("marks")){
            bMarks = true;
        }
    }
    /**
     * prints end off element and its tag
    @Override
    public void endElement(String uri, String localName, String qName) throws SAXException{
        if (qName.equalsIgnoreCase("student")){
            System.out.println("End Element: " + qName);
        }
    }
    * 
    **/
    
    @Override
    public void characters(char ch[], int start, int length) throws SAXException{
        if (bFirstName) {
            System.out.println("\tFirst Name: " + new String(ch, start, length));
            bFirstName = false;
        }
        else if(bLastName){
            System.out.println("\tLast Name: " + new String(ch, start, length));
            bLastName = false;
        }
        else if(bNickName){
            System.out.println("\tNick Name: " + new String(ch, start, length));
            bNickName = false;
        }
        else if(bMarks){
            System.out.println("\tMarks: " + new String(ch, start, length));
            bMarks = false;
        }
    }
}
