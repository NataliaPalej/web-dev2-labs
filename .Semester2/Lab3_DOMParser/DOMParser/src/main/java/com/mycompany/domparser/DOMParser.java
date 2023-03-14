package com.mycompany.domparser;

import java.io.File;
import java.io.IOException;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.ParserConfigurationException;
import org.w3c.dom.DOMException;
import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.w3c.dom.Element;
import org.xml.sax.SAXException;

public class DOMParser {

    public static void main(String[] args) {

        try{  
            // step 1 create link to input file
            File inputFile = new File ("input.xml");
            
            // step 2 create DocumentBuilder
            DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
            DocumentBuilder dbuilder = factory.newDocumentBuilder();
            
            // step 3 create document from a file/stream
            Document doc = dbuilder.parse(inputFile);
            
            // step 4 get the root element/print it
            doc.getDocumentElement().normalize();
            System.out.println("Root Element: " + doc.getDocumentElement().getNodeName());
            
            // step 5 get the list of child elements
            NodeList nList = doc.getElementsByTagName("student");
            System.out.println("------------------------- ");
            
            // step 6 loop through the list 
            for (int i=0; i<nList.getLength(); i++){
                //System.out.println("Inside the for loop, line 39");
                Node nNode = nList.item(i);
                System.out.println("Current Element: " + nNode.getNodeName());
         
                // step 7 get and print attribute for each item in the list
                if(nNode.getNodeType() == Node.ELEMENT_NODE){
                    Element eElement = (Element)nNode;
                    System.out.println("Student Roll No: " + eElement.getAttribute("rollno"));

                    // step 8 print all child elements for each item
                    //System.out.println("First Name: " + eElement.getElementsByTagName("firstname").item(0).getTextContent());
                    String fName = eElement.getElementsByTagName("firstname").item(0).getTextContent();
                    System.out.println("First Name: " + fName);

                    //System.out.println("Last Name: " + eElement.getElementsByTagName("lastname").item(0).getTextContent());
                    String lName = eElement.getElementsByTagName("lastname").item(0).getTextContent();
                    System.out.println("Last Name: " + lName);

                    //System.out.println("Nick Name: " + eElement.getElementsByTagName("nickname").item(0).getTextContent());
                    String nName = eElement.getElementsByTagName("nickname").item(0).getTextContent();
                    System.out.println("Nick Name: " + nName);

                    //System.out.println("Marks Name: " + eElement.getElementsByTagName("marks").item(0).getTextContent());
                    String marks = eElement.getElementsByTagName("marks").item(0).getTextContent();
                    System.out.println("Marks: " + marks + "\n");
                }
            }   
        }
        catch (IOException | ParserConfigurationException | DOMException | SAXException e){
            System.out.println("Error: " + e);
        }  
    }
}
