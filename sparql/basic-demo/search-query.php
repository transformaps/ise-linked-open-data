<?php 

$query = '
prefix adms: <http://www.w3.org/ns/adms#>
prefix terms: <http://business.data.gov.uk/companies/def/terms/>
prefix dct: <http://purl.org/dc/terms/>
prefix org: <http://www.w3.org/ns/org#>
prefix owl: <http://www.w3.org/2002/07/owl#>
prefix postcode: <http://data.ordnancesurvey.co.uk/ontology/postcode/>
prefix rov: <http://www.w3.org/ns/regorg#>
prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
prefix skos: <http://www.w3.org/2004/02/skos/core#>
prefix sic: <http://business.data.gov.uk/companies/def/sic-2007/>
prefix text: <http://jena.apache.org/text#>
prefix vcard: <http://www.w3.org/2006/vcard/ns#>
prefix xsd: <http://www.w3.org/2001/XMLSchema#>

SELECT ?companyName ?company {
  # see the JenaText documentation for more details
  #    https://jena.apache.org/documentation/query/text-query.html

  ?company text:query ( skos:prefLabel "('.$input.')" 100 )
      ;    a terms:RegisteredCompany
      ;    skos:prefLabel ?companyName .
  }
';

?>