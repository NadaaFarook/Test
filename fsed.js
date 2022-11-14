const dropdownList = document.querySelectorAll(`[data-dropdown="country"]`)

var link = document.createElement("link");
link.href = "https://dropdown.nadaafarook.repl.co/style.css";
link.type = "text/css";
link.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link);

function getCountryFlag(cc) {
  if (cc.length !== 2)
    return cc;

  function risl(chr) {
    return String.fromCodePoint(0x1F1E6 - 65 + chr.toUpperCase().charCodeAt(0));
  }
  return risl(cc[0]) + risl(cc[1]);
}

async function render() {
  const res = [{
      "name": "Afghanistan",
      "region": "Asia",
      "subregion": "Southern Asia",
      "alpha2Code": "AF",
      "alpha3Code": "AFG"
    },
    {
      "name": "Åland Islands",
      "region": "Europe",
      "subregion": "Northern Europe",
      "alpha2Code": "AX",
      "alpha3Code": "ALA"
    },
    {
      "name": "Albania",
      "region": "Europe",
      "subregion": "Southern Europe",
      "alpha2Code": "AL",
      "alpha3Code": "ALB"
    },
    {
      "name": "Algeria",
      "region": "Africa",
      "subregion": "Northern Africa",
      "alpha2Code": "DZ",
      "alpha3Code": "DZA"
    },
    {
      "name": "American Samoa",
      "region": "Oceania",
      "subregion": "Polynesia",
      "alpha2Code": "AS",
      "alpha3Code": "ASM"
    },
    {
      "name": "Andorra",
      "region": "Europe",
      "subregion": "Southern Europe",
      "alpha2Code": "AD",
      "alpha3Code": "AND"
    },
    {
      "name": "Angola",
      "region": "Africa",
      "subregion": "Middle Africa",
      "alpha2Code": "AO",
      "alpha3Code": "AGO"
    },
    {
      "name": "Anguilla",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "AI",
      "alpha3Code": "AIA"
    },
    {
      "name": "Antarctica",
      "region": "Polar",
      "subregion": "Antarctica",
      "alpha2Code": "AQ",
      "alpha3Code": "ATA"
    },
    {
      "name": "Antigua and Barbuda",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "AG",
      "alpha3Code": "ATG"
    },
    {
      "name": "Argentina",
      "region": "Americas",
      "subregion": "South America",
      "alpha2Code": "AR",
      "alpha3Code": "ARG"
    },
    {
      "name": "Armenia",
      "region": "Asia",
      "subregion": "Western Asia",
      "alpha2Code": "AM",
      "alpha3Code": "ARM"
    },
    {
      "name": "Aruba",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "AW",
      "alpha3Code": "ABW"
    },
    {
      "name": "Australia",
      "region": "Oceania",
      "subregion": "Australia and New Zealand",
      "alpha2Code": "AU",
      "alpha3Code": "AUS"
    },
    {
      "name": "Austria",
      "region": "Europe",
      "subregion": "Central Europe",
      "alpha2Code": "AT",
      "alpha3Code": "AUT"
    },
    {
      "name": "Azerbaijan",
      "region": "Asia",
      "subregion": "Western Asia",
      "alpha2Code": "AZ",
      "alpha3Code": "AZE"
    },
    {
      "name": "Bahamas",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "BS",
      "alpha3Code": "BHS"
    },
    {
      "name": "Bahrain",
      "region": "Asia",
      "subregion": "Western Asia",
      "alpha2Code": "BH",
      "alpha3Code": "BHR"
    },
    {
      "name": "Bangladesh",
      "region": "Asia",
      "subregion": "Southern Asia",
      "alpha2Code": "BD",
      "alpha3Code": "BGD"
    },
    {
      "name": "Barbados",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "BB",
      "alpha3Code": "BRB"
    },
    {
      "name": "Belarus",
      "region": "Europe",
      "subregion": "Eastern Europe",
      "alpha2Code": "BY",
      "alpha3Code": "BLR"
    },
    {
      "name": "Belgium",
      "region": "Europe",
      "subregion": "Western Europe",
      "alpha2Code": "BE",
      "alpha3Code": "BEL"
    },
    {
      "name": "Belize",
      "region": "Americas",
      "subregion": "Central America",
      "alpha2Code": "BZ",
      "alpha3Code": "BLZ"
    },
    {
      "name": "Benin",
      "region": "Africa",
      "subregion": "Western Africa",
      "alpha2Code": "BJ",
      "alpha3Code": "BEN"
    },
    {
      "name": "Bermuda",
      "region": "Americas",
      "subregion": "Northern America",
      "alpha2Code": "BM",
      "alpha3Code": "BMU"
    },
    {
      "name": "Bhutan",
      "region": "Asia",
      "subregion": "Southern Asia",
      "alpha2Code": "BT",
      "alpha3Code": "BTN"
    },
    {
      "name": "Bolivia (Plurinational State of)",
      "region": "Americas",
      "subregion": "South America",
      "alpha2Code": "BO",
      "alpha3Code": "BOL"
    },
    {
      "name": "Bonaire, Sint Eustatius and Saba",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "BQ",
      "alpha3Code": "BES"
    },
    {
      "name": "Bosnia and Herzegovina",
      "region": "Europe",
      "subregion": "Southern Europe",
      "alpha2Code": "BA",
      "alpha3Code": "BIH"
    },
    {
      "name": "Botswana",
      "region": "Africa",
      "subregion": "Southern Africa",
      "alpha2Code": "BW",
      "alpha3Code": "BWA"
    },
    {
      "name": "Bouvet Island",
      "region": "Antarctic Ocean",
      "subregion": "South Antarctic Ocean",
      "alpha2Code": "BV",
      "alpha3Code": "BVT"
    },
    {
      "name": "Brazil",
      "region": "Americas",
      "subregion": "South America",
      "alpha2Code": "BR",
      "alpha3Code": "BRA"
    },
    {
      "name": "British Indian Ocean Territory",
      "region": "Africa",
      "subregion": "Eastern Africa",
      "alpha2Code": "IO",
      "alpha3Code": "IOT"
    },
    {
      "name": "United States Minor Outlying Islands",
      "region": "Americas",
      "subregion": "Northern America",
      "alpha2Code": "UM",
      "alpha3Code": "UMI"
    },
    {
      "name": "Virgin Islands (British)",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "VG",
      "alpha3Code": "VGB"
    },
    {
      "name": "Virgin Islands (U.S.)",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "VI",
      "alpha3Code": "VIR"
    },
    {
      "name": "Brunei Darussalam",
      "region": "Asia",
      "subregion": "South-Eastern Asia",
      "alpha2Code": "BN",
      "alpha3Code": "BRN"
    },
    {
      "name": "Bulgaria",
      "region": "Europe",
      "subregion": "Eastern Europe",
      "alpha2Code": "BG",
      "alpha3Code": "BGR"
    },
    {
      "name": "Burkina Faso",
      "region": "Africa",
      "subregion": "Western Africa",
      "alpha2Code": "BF",
      "alpha3Code": "BFA"
    },
    {
      "name": "Burundi",
      "region": "Africa",
      "subregion": "Eastern Africa",
      "alpha2Code": "BI",
      "alpha3Code": "BDI"
    },
    {
      "name": "Cambodia",
      "region": "Asia",
      "subregion": "South-Eastern Asia",
      "alpha2Code": "KH",
      "alpha3Code": "KHM"
    },
    {
      "name": "Cameroon",
      "region": "Africa",
      "subregion": "Middle Africa",
      "alpha2Code": "CM",
      "alpha3Code": "CMR"
    },
    {
      "name": "Canada",
      "region": "Americas",
      "subregion": "Northern America",
      "alpha2Code": "CA",
      "alpha3Code": "CAN"
    },
    {
      "name": "Cabo Verde",
      "region": "Africa",
      "subregion": "Western Africa",
      "alpha2Code": "CV",
      "alpha3Code": "CPV"
    },
    {
      "name": "Cayman Islands",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "KY",
      "alpha3Code": "CYM"
    },
    {
      "name": "Central African Republic",
      "region": "Africa",
      "subregion": "Middle Africa",
      "alpha2Code": "CF",
      "alpha3Code": "CAF"
    },
    {
      "name": "Chad",
      "region": "Africa",
      "subregion": "Middle Africa",
      "alpha2Code": "TD",
      "alpha3Code": "TCD"
    },
    {
      "name": "Chile",
      "region": "Americas",
      "subregion": "South America",
      "alpha2Code": "CL",
      "alpha3Code": "CHL"
    },
    {
      "name": "China",
      "region": "Asia",
      "subregion": "Eastern Asia",
      "alpha2Code": "CN",
      "alpha3Code": "CHN"
    },
    {
      "name": "Christmas Island",
      "region": "Oceania",
      "subregion": "Australia and New Zealand",
      "alpha2Code": "CX",
      "alpha3Code": "CXR"
    },
    {
      "name": "Cocos (Keeling) Islands",
      "region": "Oceania",
      "subregion": "Australia and New Zealand",
      "alpha2Code": "CC",
      "alpha3Code": "CCK"
    },
    {
      "name": "Colombia",
      "region": "Americas",
      "subregion": "South America",
      "alpha2Code": "CO",
      "alpha3Code": "COL"
    },
    {
      "name": "Comoros",
      "region": "Africa",
      "subregion": "Eastern Africa",
      "alpha2Code": "KM",
      "alpha3Code": "COM"
    },
    {
      "name": "Congo",
      "region": "Africa",
      "subregion": "Middle Africa",
      "alpha2Code": "CG",
      "alpha3Code": "COG"
    },
    {
      "name": "Congo (Democratic Republic of the)",
      "region": "Africa",
      "subregion": "Middle Africa",
      "alpha2Code": "CD",
      "alpha3Code": "COD"
    },
    {
      "name": "Cook Islands",
      "region": "Oceania",
      "subregion": "Polynesia",
      "alpha2Code": "CK",
      "alpha3Code": "COK"
    },
    {
      "name": "Costa Rica",
      "region": "Americas",
      "subregion": "Central America",
      "alpha2Code": "CR",
      "alpha3Code": "CRI"
    },
    {
      "name": "Croatia",
      "region": "Europe",
      "subregion": "Southern Europe",
      "alpha2Code": "HR",
      "alpha3Code": "HRV"
    },
    {
      "name": "Cuba",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "CU",
      "alpha3Code": "CUB"
    },
    {
      "name": "Curaçao",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "CW",
      "alpha3Code": "CUW"
    },
    {
      "name": "Cyprus",
      "region": "Europe",
      "subregion": "Southern Europe",
      "alpha2Code": "CY",
      "alpha3Code": "CYP"
    },
    {
      "name": "Czech Republic",
      "region": "Europe",
      "subregion": "Central Europe",
      "alpha2Code": "CZ",
      "alpha3Code": "CZE"
    },
    {
      "name": "Denmark",
      "region": "Europe",
      "subregion": "Northern Europe",
      "alpha2Code": "DK",
      "alpha3Code": "DNK"
    },
    {
      "name": "Djibouti",
      "region": "Africa",
      "subregion": "Eastern Africa",
      "alpha2Code": "DJ",
      "alpha3Code": "DJI"
    },
    {
      "name": "Dominica",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "DM",
      "alpha3Code": "DMA"
    },
    {
      "name": "Dominican Republic",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "DO",
      "alpha3Code": "DOM"
    },
    {
      "name": "Ecuador",
      "region": "Americas",
      "subregion": "South America",
      "alpha2Code": "EC",
      "alpha3Code": "ECU"
    },
    {
      "name": "Egypt",
      "region": "Africa",
      "subregion": "Northern Africa",
      "alpha2Code": "EG",
      "alpha3Code": "EGY"
    },
    {
      "name": "El Salvador",
      "region": "Americas",
      "subregion": "Central America",
      "alpha2Code": "SV",
      "alpha3Code": "SLV"
    },
    {
      "name": "Equatorial Guinea",
      "region": "Africa",
      "subregion": "Middle Africa",
      "alpha2Code": "GQ",
      "alpha3Code": "GNQ"
    },
    {
      "name": "Eritrea",
      "region": "Africa",
      "subregion": "Eastern Africa",
      "alpha2Code": "ER",
      "alpha3Code": "ERI"
    },
    {
      "name": "Estonia",
      "region": "Europe",
      "subregion": "Northern Europe",
      "alpha2Code": "EE",
      "alpha3Code": "EST"
    },
    {
      "name": "Ethiopia",
      "region": "Africa",
      "subregion": "Eastern Africa",
      "alpha2Code": "ET",
      "alpha3Code": "ETH"
    },
    {
      "name": "Falkland Islands (Malvinas)",
      "region": "Americas",
      "subregion": "South America",
      "alpha2Code": "FK",
      "alpha3Code": "FLK"
    },
    {
      "name": "Faroe Islands",
      "region": "Europe",
      "subregion": "Northern Europe",
      "alpha2Code": "FO",
      "alpha3Code": "FRO"
    },
    {
      "name": "Fiji",
      "region": "Oceania",
      "subregion": "Melanesia",
      "alpha2Code": "FJ",
      "alpha3Code": "FJI"
    },
    {
      "name": "Finland",
      "region": "Europe",
      "subregion": "Northern Europe",
      "alpha2Code": "FI",
      "alpha3Code": "FIN"
    },
    {
      "name": "France",
      "region": "Europe",
      "subregion": "Western Europe",
      "alpha2Code": "FR",
      "alpha3Code": "FRA"
    },
    {
      "name": "French Guiana",
      "region": "Americas",
      "subregion": "South America",
      "alpha2Code": "GF",
      "alpha3Code": "GUF"
    },
    {
      "name": "French Polynesia",
      "region": "Oceania",
      "subregion": "Polynesia",
      "alpha2Code": "PF",
      "alpha3Code": "PYF"
    },
    {
      "name": "French Southern Territories",
      "region": "Africa",
      "subregion": "Southern Africa",
      "alpha2Code": "TF",
      "alpha3Code": "ATF"
    },
    {
      "name": "Gabon",
      "region": "Africa",
      "subregion": "Middle Africa",
      "alpha2Code": "GA",
      "alpha3Code": "GAB"
    },
    {
      "name": "Gambia",
      "region": "Africa",
      "subregion": "Western Africa",
      "alpha2Code": "GM",
      "alpha3Code": "GMB"
    },
    {
      "name": "Georgia",
      "region": "Asia",
      "subregion": "Western Asia",
      "alpha2Code": "GE",
      "alpha3Code": "GEO"
    },
    {
      "name": "Germany",
      "region": "Europe",
      "subregion": "Central Europe",
      "alpha2Code": "DE",
      "alpha3Code": "DEU"
    },
    {
      "name": "Ghana",
      "region": "Africa",
      "subregion": "Western Africa",
      "alpha2Code": "GH",
      "alpha3Code": "GHA"
    },
    {
      "name": "Gibraltar",
      "region": "Europe",
      "subregion": "Southern Europe",
      "alpha2Code": "GI",
      "alpha3Code": "GIB"
    },
    {
      "name": "Greece",
      "region": "Europe",
      "subregion": "Southern Europe",
      "alpha2Code": "GR",
      "alpha3Code": "GRC"
    },
    {
      "name": "Greenland",
      "region": "Americas",
      "subregion": "Northern America",
      "alpha2Code": "GL",
      "alpha3Code": "GRL"
    },
    {
      "name": "Grenada",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "GD",
      "alpha3Code": "GRD"
    },
    {
      "name": "Guadeloupe",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "GP",
      "alpha3Code": "GLP"
    },
    {
      "name": "Guam",
      "region": "Oceania",
      "subregion": "Micronesia",
      "alpha2Code": "GU",
      "alpha3Code": "GUM"
    },
    {
      "name": "Guatemala",
      "region": "Americas",
      "subregion": "Central America",
      "alpha2Code": "GT",
      "alpha3Code": "GTM"
    },
    {
      "name": "Guernsey",
      "region": "Europe",
      "subregion": "Northern Europe",
      "alpha2Code": "GG",
      "alpha3Code": "GGY"
    },
    {
      "name": "Guinea",
      "region": "Africa",
      "subregion": "Western Africa",
      "alpha2Code": "GN",
      "alpha3Code": "GIN"
    },
    {
      "name": "Guinea-Bissau",
      "region": "Africa",
      "subregion": "Western Africa",
      "alpha2Code": "GW",
      "alpha3Code": "GNB"
    },
    {
      "name": "Guyana",
      "region": "Americas",
      "subregion": "South America",
      "alpha2Code": "GY",
      "alpha3Code": "GUY"
    },
    {
      "name": "Haiti",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "HT",
      "alpha3Code": "HTI"
    },
    {
      "name": "Heard Island and McDonald Islands",
      "region": "Antarctic",
      "subregion": "Antarctic",
      "alpha2Code": "HM",
      "alpha3Code": "HMD"
    },
    {
      "name": "Vatican City",
      "region": "Europe",
      "subregion": "Southern Europe",
      "alpha2Code": "VA",
      "alpha3Code": "VAT"
    },
    {
      "name": "Honduras",
      "region": "Americas",
      "subregion": "Central America",
      "alpha2Code": "HN",
      "alpha3Code": "HND"
    },
    {
      "name": "Hungary",
      "region": "Europe",
      "subregion": "Central Europe",
      "alpha2Code": "HU",
      "alpha3Code": "HUN"
    },
    {
      "name": "Hong Kong",
      "region": "Asia",
      "subregion": "Eastern Asia",
      "alpha2Code": "HK",
      "alpha3Code": "HKG"
    },
    {
      "name": "Iceland",
      "region": "Europe",
      "subregion": "Northern Europe",
      "alpha2Code": "IS",
      "alpha3Code": "ISL"
    },
    {
      "name": "India",
      "region": "Asia",
      "subregion": "Southern Asia",
      "alpha2Code": "IN",
      "alpha3Code": "IND"
    },
    {
      "name": "Indonesia",
      "region": "Asia",
      "subregion": "South-Eastern Asia",
      "alpha2Code": "ID",
      "alpha3Code": "IDN"
    },
    {
      "name": "Ivory Coast",
      "region": "Africa",
      "subregion": "Western Africa",
      "alpha2Code": "CI",
      "alpha3Code": "CIV"
    },
    {
      "name": "Iran (Islamic Republic of)",
      "region": "Asia",
      "subregion": "Southern Asia",
      "alpha2Code": "IR",
      "alpha3Code": "IRN"
    },
    {
      "name": "Iraq",
      "region": "Asia",
      "subregion": "Western Asia",
      "alpha2Code": "IQ",
      "alpha3Code": "IRQ"
    },
    {
      "name": "Ireland",
      "region": "Europe",
      "subregion": "Northern Europe",
      "alpha2Code": "IE",
      "alpha3Code": "IRL"
    },
    {
      "name": "Isle of Man",
      "region": "Europe",
      "subregion": "Northern Europe",
      "alpha2Code": "IM",
      "alpha3Code": "IMN"
    },
    {
      "name": "Israel",
      "region": "Asia",
      "subregion": "Western Asia",
      "alpha2Code": "IL",
      "alpha3Code": "ISR"
    },
    {
      "name": "Italy",
      "region": "Europe",
      "subregion": "Southern Europe",
      "alpha2Code": "IT",
      "alpha3Code": "ITA"
    },
    {
      "name": "Jamaica",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "JM",
      "alpha3Code": "JAM"
    },
    {
      "name": "Japan",
      "region": "Asia",
      "subregion": "Eastern Asia",
      "alpha2Code": "JP",
      "alpha3Code": "JPN"
    },
    {
      "name": "Jersey",
      "region": "Europe",
      "subregion": "Northern Europe",
      "alpha2Code": "JE",
      "alpha3Code": "JEY"
    },
    {
      "name": "Jordan",
      "region": "Asia",
      "subregion": "Western Asia",
      "alpha2Code": "JO",
      "alpha3Code": "JOR"
    },
    {
      "name": "Kazakhstan",
      "region": "Asia",
      "subregion": "Central Asia",
      "alpha2Code": "KZ",
      "alpha3Code": "KAZ"
    },
    {
      "name": "Kenya",
      "region": "Africa",
      "subregion": "Eastern Africa",
      "alpha2Code": "KE",
      "alpha3Code": "KEN"
    },
    {
      "name": "Kiribati",
      "region": "Oceania",
      "subregion": "Micronesia",
      "alpha2Code": "KI",
      "alpha3Code": "KIR"
    },
    {
      "name": "Kuwait",
      "region": "Asia",
      "subregion": "Western Asia",
      "alpha2Code": "KW",
      "alpha3Code": "KWT"
    },
    {
      "name": "Kyrgyzstan",
      "region": "Asia",
      "subregion": "Central Asia",
      "alpha2Code": "KG",
      "alpha3Code": "KGZ"
    },
    {
      "name": "Lao People's Democratic Republic",
      "region": "Asia",
      "subregion": "South-Eastern Asia",
      "alpha2Code": "LA",
      "alpha3Code": "LAO"
    },
    {
      "name": "Latvia",
      "region": "Europe",
      "subregion": "Northern Europe",
      "alpha2Code": "LV",
      "alpha3Code": "LVA"
    },
    {
      "name": "Lebanon",
      "region": "Asia",
      "subregion": "Western Asia",
      "alpha2Code": "LB",
      "alpha3Code": "LBN"
    },
    {
      "name": "Lesotho",
      "region": "Africa",
      "subregion": "Southern Africa",
      "alpha2Code": "LS",
      "alpha3Code": "LSO"
    },
    {
      "name": "Liberia",
      "region": "Africa",
      "subregion": "Western Africa",
      "alpha2Code": "LR",
      "alpha3Code": "LBR"
    },
    {
      "name": "Libya",
      "region": "Africa",
      "subregion": "Northern Africa",
      "alpha2Code": "LY",
      "alpha3Code": "LBY"
    },
    {
      "name": "Liechtenstein",
      "region": "Europe",
      "subregion": "Central Europe",
      "alpha2Code": "LI",
      "alpha3Code": "LIE"
    },
    {
      "name": "Lithuania",
      "region": "Europe",
      "subregion": "Northern Europe",
      "alpha2Code": "LT",
      "alpha3Code": "LTU"
    },
    {
      "name": "Luxembourg",
      "region": "Europe",
      "subregion": "Western Europe",
      "alpha2Code": "LU",
      "alpha3Code": "LUX"
    },
    {
      "name": "Macao",
      "region": "Asia",
      "subregion": "Eastern Asia",
      "alpha2Code": "MO",
      "alpha3Code": "MAC"
    },
    {
      "name": "North Macedonia",
      "region": "Europe",
      "subregion": "Southern Europe",
      "alpha2Code": "MK",
      "alpha3Code": "MKD"
    },
    {
      "name": "Madagascar",
      "region": "Africa",
      "subregion": "Eastern Africa",
      "alpha2Code": "MG",
      "alpha3Code": "MDG"
    },
    {
      "name": "Malawi",
      "region": "Africa",
      "subregion": "Eastern Africa",
      "alpha2Code": "MW",
      "alpha3Code": "MWI"
    },
    {
      "name": "Malaysia",
      "region": "Asia",
      "subregion": "South-Eastern Asia",
      "alpha2Code": "MY",
      "alpha3Code": "MYS"
    },
    {
      "name": "Maldives",
      "region": "Asia",
      "subregion": "Southern Asia",
      "alpha2Code": "MV",
      "alpha3Code": "MDV"
    },
    {
      "name": "Mali",
      "region": "Africa",
      "subregion": "Western Africa",
      "alpha2Code": "ML",
      "alpha3Code": "MLI"
    },
    {
      "name": "Malta",
      "region": "Europe",
      "subregion": "Southern Europe",
      "alpha2Code": "MT",
      "alpha3Code": "MLT"
    },
    {
      "name": "Marshall Islands",
      "region": "Oceania",
      "subregion": "Micronesia",
      "alpha2Code": "MH",
      "alpha3Code": "MHL"
    },
    {
      "name": "Martinique",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "MQ",
      "alpha3Code": "MTQ"
    },
    {
      "name": "Mauritania",
      "region": "Africa",
      "subregion": "Western Africa",
      "alpha2Code": "MR",
      "alpha3Code": "MRT"
    },
    {
      "name": "Mauritius",
      "region": "Africa",
      "subregion": "Eastern Africa",
      "alpha2Code": "MU",
      "alpha3Code": "MUS"
    },
    {
      "name": "Mayotte",
      "region": "Africa",
      "subregion": "Eastern Africa",
      "alpha2Code": "YT",
      "alpha3Code": "MYT"
    },
    {
      "name": "Mexico",
      "region": "Americas",
      "subregion": "North America",
      "alpha2Code": "MX",
      "alpha3Code": "MEX"
    },
    {
      "name": "Micronesia (Federated States of)",
      "region": "Oceania",
      "subregion": "Micronesia",
      "alpha2Code": "FM",
      "alpha3Code": "FSM"
    },
    {
      "name": "Moldova (Republic of)",
      "region": "Europe",
      "subregion": "Eastern Europe",
      "alpha2Code": "MD",
      "alpha3Code": "MDA"
    },
    {
      "name": "Monaco",
      "region": "Europe",
      "subregion": "Western Europe",
      "alpha2Code": "MC",
      "alpha3Code": "MCO"
    },
    {
      "name": "Mongolia",
      "region": "Asia",
      "subregion": "Eastern Asia",
      "alpha2Code": "MN",
      "alpha3Code": "MNG"
    },
    {
      "name": "Montenegro",
      "region": "Europe",
      "subregion": "Southern Europe",
      "alpha2Code": "ME",
      "alpha3Code": "MNE"
    },
    {
      "name": "Montserrat",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "MS",
      "alpha3Code": "MSR"
    },
    {
      "name": "Morocco",
      "region": "Africa",
      "subregion": "Northern Africa",
      "alpha2Code": "MA",
      "alpha3Code": "MAR"
    },
    {
      "name": "Mozambique",
      "region": "Africa",
      "subregion": "Eastern Africa",
      "alpha2Code": "MZ",
      "alpha3Code": "MOZ"
    },
    {
      "name": "Myanmar",
      "region": "Asia",
      "subregion": "South-Eastern Asia",
      "alpha2Code": "MM",
      "alpha3Code": "MMR"
    },
    {
      "name": "Namibia",
      "region": "Africa",
      "subregion": "Southern Africa",
      "alpha2Code": "NA",
      "alpha3Code": "NAM"
    },
    {
      "name": "Nauru",
      "region": "Oceania",
      "subregion": "Micronesia",
      "alpha2Code": "NR",
      "alpha3Code": "NRU"
    },
    {
      "name": "Nepal",
      "region": "Asia",
      "subregion": "Southern Asia",
      "alpha2Code": "NP",
      "alpha3Code": "NPL"
    },
    {
      "name": "Netherlands",
      "region": "Europe",
      "subregion": "Western Europe",
      "alpha2Code": "NL",
      "alpha3Code": "NLD"
    },
    {
      "name": "New Caledonia",
      "region": "Oceania",
      "subregion": "Melanesia",
      "alpha2Code": "NC",
      "alpha3Code": "NCL"
    },
    {
      "name": "New Zealand",
      "region": "Oceania",
      "subregion": "Australia and New Zealand",
      "alpha2Code": "NZ",
      "alpha3Code": "NZL"
    },
    {
      "name": "Nicaragua",
      "region": "Americas",
      "subregion": "Central America",
      "alpha2Code": "NI",
      "alpha3Code": "NIC"
    },
    {
      "name": "Niger",
      "region": "Africa",
      "subregion": "Western Africa",
      "alpha2Code": "NE",
      "alpha3Code": "NER"
    },
    {
      "name": "Nigeria",
      "region": "Africa",
      "subregion": "Western Africa",
      "alpha2Code": "NG",
      "alpha3Code": "NGA"
    },
    {
      "name": "Niue",
      "region": "Oceania",
      "subregion": "Polynesia",
      "alpha2Code": "NU",
      "alpha3Code": "NIU"
    },
    {
      "name": "Norfolk Island",
      "region": "Oceania",
      "subregion": "Australia and New Zealand",
      "alpha2Code": "NF",
      "alpha3Code": "NFK"
    },
    {
      "name": "Korea (Democratic People's Republic of)",
      "region": "Asia",
      "subregion": "Eastern Asia",
      "alpha2Code": "KP",
      "alpha3Code": "PRK"
    },
    {
      "name": "Northern Mariana Islands",
      "region": "Oceania",
      "subregion": "Micronesia",
      "alpha2Code": "MP",
      "alpha3Code": "MNP"
    },
    {
      "name": "Norway",
      "region": "Europe",
      "subregion": "Northern Europe",
      "alpha2Code": "NO",
      "alpha3Code": "NOR"
    },
    {
      "name": "Oman",
      "region": "Asia",
      "subregion": "Western Asia",
      "alpha2Code": "OM",
      "alpha3Code": "OMN"
    },
    {
      "name": "Pakistan",
      "region": "Asia",
      "subregion": "Southern Asia",
      "alpha2Code": "PK",
      "alpha3Code": "PAK"
    },
    {
      "name": "Palau",
      "region": "Oceania",
      "subregion": "Micronesia",
      "alpha2Code": "PW",
      "alpha3Code": "PLW"
    },
    {
      "name": "Palestine, State of",
      "region": "Asia",
      "subregion": "Western Asia",
      "alpha2Code": "PS",
      "alpha3Code": "PSE"
    },
    {
      "name": "Panama",
      "region": "Americas",
      "subregion": "Central America",
      "alpha2Code": "PA",
      "alpha3Code": "PAN"
    },
    {
      "name": "Papua New Guinea",
      "region": "Oceania",
      "subregion": "Melanesia",
      "alpha2Code": "PG",
      "alpha3Code": "PNG"
    },
    {
      "name": "Paraguay",
      "region": "Americas",
      "subregion": "South America",
      "alpha2Code": "PY",
      "alpha3Code": "PRY"
    },
    {
      "name": "Peru",
      "region": "Americas",
      "subregion": "South America",
      "alpha2Code": "PE",
      "alpha3Code": "PER"
    },
    {
      "name": "Philippines",
      "region": "Asia",
      "subregion": "South-Eastern Asia",
      "alpha2Code": "PH",
      "alpha3Code": "PHL"
    },
    {
      "name": "Pitcairn",
      "region": "Oceania",
      "subregion": "Polynesia",
      "alpha2Code": "PN",
      "alpha3Code": "PCN"
    },
    {
      "name": "Poland",
      "region": "Europe",
      "subregion": "Central Europe",
      "alpha2Code": "PL",
      "alpha3Code": "POL"
    },
    {
      "name": "Portugal",
      "region": "Europe",
      "subregion": "Southern Europe",
      "alpha2Code": "PT",
      "alpha3Code": "PRT"
    },
    {
      "name": "Puerto Rico",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "PR",
      "alpha3Code": "PRI"
    },
    {
      "name": "Qatar",
      "region": "Asia",
      "subregion": "Western Asia",
      "alpha2Code": "QA",
      "alpha3Code": "QAT"
    },
    {
      "name": "Republic of Kosovo",
      "region": "Europe",
      "subregion": "Eastern Europe",
      "alpha2Code": "XK",
      "alpha3Code": "UNK"
    },
    {
      "name": "Réunion",
      "region": "Africa",
      "subregion": "Eastern Africa",
      "alpha2Code": "RE",
      "alpha3Code": "REU"
    },
    {
      "name": "Romania",
      "region": "Europe",
      "subregion": "Eastern Europe",
      "alpha2Code": "RO",
      "alpha3Code": "ROU"
    },
    {
      "name": "Russian Federation",
      "region": "Europe",
      "subregion": "Eastern Europe",
      "alpha2Code": "RU",
      "alpha3Code": "RUS"
    },
    {
      "name": "Rwanda",
      "region": "Africa",
      "subregion": "Eastern Africa",
      "alpha2Code": "RW",
      "alpha3Code": "RWA"
    },
    {
      "name": "Saint Barthélemy",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "BL",
      "alpha3Code": "BLM"
    },
    {
      "name": "Saint Helena, Ascension and Tristan da Cunha",
      "region": "Africa",
      "subregion": "Western Africa",
      "alpha2Code": "SH",
      "alpha3Code": "SHN"
    },
    {
      "name": "Saint Kitts and Nevis",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "KN",
      "alpha3Code": "KNA"
    },
    {
      "name": "Saint Lucia",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "LC",
      "alpha3Code": "LCA"
    },
    {
      "name": "Saint Martin (French part)",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "MF",
      "alpha3Code": "MAF"
    },
    {
      "name": "Saint Pierre and Miquelon",
      "region": "Americas",
      "subregion": "Northern America",
      "alpha2Code": "PM",
      "alpha3Code": "SPM"
    },
    {
      "name": "Saint Vincent and the Grenadines",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "VC",
      "alpha3Code": "VCT"
    },
    {
      "name": "Samoa",
      "region": "Oceania",
      "subregion": "Polynesia",
      "alpha2Code": "WS",
      "alpha3Code": "WSM"
    },
    {
      "name": "San Marino",
      "region": "Europe",
      "subregion": "Southern Europe",
      "alpha2Code": "SM",
      "alpha3Code": "SMR"
    },
    {
      "name": "Sao Tome and Principe",
      "region": "Africa",
      "subregion": "Middle Africa",
      "alpha2Code": "ST",
      "alpha3Code": "STP"
    },
    {
      "name": "Saudi Arabia",
      "region": "Asia",
      "subregion": "Western Asia",
      "alpha2Code": "SA",
      "alpha3Code": "SAU"
    },
    {
      "name": "Senegal",
      "region": "Africa",
      "subregion": "Western Africa",
      "alpha2Code": "SN",
      "alpha3Code": "SEN"
    },
    {
      "name": "Serbia",
      "region": "Europe",
      "subregion": "Southern Europe",
      "alpha2Code": "RS",
      "alpha3Code": "SRB"
    },
    {
      "name": "Seychelles",
      "region": "Africa",
      "subregion": "Eastern Africa",
      "alpha2Code": "SC",
      "alpha3Code": "SYC"
    },
    {
      "name": "Sierra Leone",
      "region": "Africa",
      "subregion": "Western Africa",
      "alpha2Code": "SL",
      "alpha3Code": "SLE"
    },
    {
      "name": "Singapore",
      "region": "Asia",
      "subregion": "South-Eastern Asia",
      "alpha2Code": "SG",
      "alpha3Code": "SGP"
    },
    {
      "name": "Sint Maarten (Dutch part)",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "SX",
      "alpha3Code": "SXM"
    },
    {
      "name": "Slovakia",
      "region": "Europe",
      "subregion": "Central Europe",
      "alpha2Code": "SK",
      "alpha3Code": "SVK"
    },
    {
      "name": "Slovenia",
      "region": "Europe",
      "subregion": "Southern Europe",
      "alpha2Code": "SI",
      "alpha3Code": "SVN"
    },
    {
      "name": "Solomon Islands",
      "region": "Oceania",
      "subregion": "Melanesia",
      "alpha2Code": "SB",
      "alpha3Code": "SLB"
    },
    {
      "name": "Somalia",
      "region": "Africa",
      "subregion": "Eastern Africa",
      "alpha2Code": "SO",
      "alpha3Code": "SOM"
    },
    {
      "name": "South Africa",
      "region": "Africa",
      "subregion": "Southern Africa",
      "alpha2Code": "ZA",
      "alpha3Code": "ZAF"
    },
    {
      "name": "South Georgia and the South Sandwich Islands",
      "region": "Americas",
      "subregion": "South America",
      "alpha2Code": "GS",
      "alpha3Code": "SGS"
    },
    {
      "name": "Korea (Republic of)",
      "region": "Asia",
      "subregion": "Eastern Asia",
      "alpha2Code": "KR",
      "alpha3Code": "KOR"
    },
    {
      "name": "Spain",
      "region": "Europe",
      "subregion": "Southern Europe",
      "alpha2Code": "ES",
      "alpha3Code": "ESP"
    },
    {
      "name": "Sri Lanka",
      "region": "Asia",
      "subregion": "Southern Asia",
      "alpha2Code": "LK",
      "alpha3Code": "LKA"
    },
    {
      "name": "Sudan",
      "region": "Africa",
      "subregion": "Northern Africa",
      "alpha2Code": "SD",
      "alpha3Code": "SDN"
    },
    {
      "name": "South Sudan",
      "region": "Africa",
      "subregion": "Middle Africa",
      "alpha2Code": "SS",
      "alpha3Code": "SSD"
    },
    {
      "name": "Suriname",
      "region": "Americas",
      "subregion": "South America",
      "alpha2Code": "SR",
      "alpha3Code": "SUR"
    },
    {
      "name": "Svalbard and Jan Mayen",
      "region": "Europe",
      "subregion": "Northern Europe",
      "alpha2Code": "SJ",
      "alpha3Code": "SJM"
    },
    {
      "name": "Swaziland",
      "region": "Africa",
      "subregion": "Southern Africa",
      "alpha2Code": "SZ",
      "alpha3Code": "SWZ"
    },
    {
      "name": "Sweden",
      "region": "Europe",
      "subregion": "Northern Europe",
      "alpha2Code": "SE",
      "alpha3Code": "SWE"
    },
    {
      "name": "Switzerland",
      "region": "Europe",
      "subregion": "Central Europe",
      "alpha2Code": "CH",
      "alpha3Code": "CHE"
    },
    {
      "name": "Syrian Arab Republic",
      "region": "Asia",
      "subregion": "Western Asia",
      "alpha2Code": "SY",
      "alpha3Code": "SYR"
    },
    {
      "name": "Taiwan",
      "region": "Asia",
      "subregion": "Eastern Asia",
      "alpha2Code": "TW",
      "alpha3Code": "TWN"
    },
    {
      "name": "Tajikistan",
      "region": "Asia",
      "subregion": "Central Asia",
      "alpha2Code": "TJ",
      "alpha3Code": "TJK"
    },
    {
      "name": "Tanzania, United Republic of",
      "region": "Africa",
      "subregion": "Eastern Africa",
      "alpha2Code": "TZ",
      "alpha3Code": "TZA"
    },
    {
      "name": "Thailand",
      "region": "Asia",
      "subregion": "South-Eastern Asia",
      "alpha2Code": "TH",
      "alpha3Code": "THA"
    },
    {
      "name": "Timor-Leste",
      "region": "Asia",
      "subregion": "South-Eastern Asia",
      "alpha2Code": "TL",
      "alpha3Code": "TLS"
    },
    {
      "name": "Togo",
      "region": "Africa",
      "subregion": "Western Africa",
      "alpha2Code": "TG",
      "alpha3Code": "TGO"
    },
    {
      "name": "Tokelau",
      "region": "Oceania",
      "subregion": "Polynesia",
      "alpha2Code": "TK",
      "alpha3Code": "TKL"
    },
    {
      "name": "Tonga",
      "region": "Oceania",
      "subregion": "Polynesia",
      "alpha2Code": "TO",
      "alpha3Code": "TON"
    },
    {
      "name": "Trinidad and Tobago",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "TT",
      "alpha3Code": "TTO"
    },
    {
      "name": "Tunisia",
      "region": "Africa",
      "subregion": "Northern Africa",
      "alpha2Code": "TN",
      "alpha3Code": "TUN"
    },
    {
      "name": "Turkey",
      "region": "Asia",
      "subregion": "Western Asia",
      "alpha2Code": "TR",
      "alpha3Code": "TUR"
    },
    {
      "name": "Turkmenistan",
      "region": "Asia",
      "subregion": "Central Asia",
      "alpha2Code": "TM",
      "alpha3Code": "TKM"
    },
    {
      "name": "Turks and Caicos Islands",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "TC",
      "alpha3Code": "TCA"
    },
    {
      "name": "Tuvalu",
      "region": "Oceania",
      "subregion": "Polynesia",
      "alpha2Code": "TV",
      "alpha3Code": "TUV"
    },
    {
      "name": "Uganda",
      "region": "Africa",
      "subregion": "Eastern Africa",
      "alpha2Code": "UG",
      "alpha3Code": "UGA"
    },
    {
      "name": "Ukraine",
      "region": "Europe",
      "subregion": "Eastern Europe",
      "alpha2Code": "UA",
      "alpha3Code": "UKR"
    },
    {
      "name": "United Arab Emirates",
      "region": "Asia",
      "subregion": "Western Asia",
      "alpha2Code": "AE",
      "alpha3Code": "ARE"
    },
    {
      "name": "United Kingdom of Great Britain and Northern Ireland",
      "region": "Europe",
      "subregion": "Northern Europe",
      "alpha2Code": "GB",
      "alpha3Code": "GBR"
    },
    {
      "name": "United States of America",
      "region": "Americas",
      "subregion": "Northern America",
      "alpha2Code": "US",
      "alpha3Code": "USA"
    },
    {
      "name": "Uruguay",
      "region": "Americas",
      "subregion": "South America",
      "alpha2Code": "UY",
      "alpha3Code": "URY"
    },
    {
      "name": "Uzbekistan",
      "region": "Asia",
      "subregion": "Central Asia",
      "alpha2Code": "UZ",
      "alpha3Code": "UZB"
    },
    {
      "name": "Vanuatu",
      "region": "Oceania",
      "subregion": "Melanesia",
      "alpha2Code": "VU",
      "alpha3Code": "VUT"
    },
    {
      "name": "Venezuela (Bolivarian Republic of)",
      "region": "Americas",
      "subregion": "South America",
      "alpha2Code": "VE",
      "alpha3Code": "VEN"
    },
    {
      "name": "Vietnam",
      "region": "Asia",
      "subregion": "South-Eastern Asia",
      "alpha2Code": "VN",
      "alpha3Code": "VNM"
    },
    {
      "name": "Wallis and Futuna",
      "region": "Oceania",
      "subregion": "Polynesia",
      "alpha2Code": "WF",
      "alpha3Code": "WLF"
    },
    {
      "name": "Western Sahara",
      "region": "Africa",
      "subregion": "Northern Africa",
      "alpha2Code": "EH",
      "alpha3Code": "ESH"
    },
    {
      "name": "Yemen",
      "region": "Asia",
      "subregion": "Western Asia",
      "alpha2Code": "YE",
      "alpha3Code": "YEM"
    },
    {
      "name": "Zambia",
      "region": "Africa",
      "subregion": "Eastern Africa",
      "alpha2Code": "ZM",
      "alpha3Code": "ZMB"
    },
    {
      "name": "Zimbabwe",
      "region": "Africa",
      "subregion": "Southern Africa",
      "alpha2Code": "ZW",
      "alpha3Code": "ZWE"
    }
  ]

  const country = res
  const continents = [...new Set(res.map(e => e.region))].map(e => res.filter(f => f.region == e))
  
  dropdownList.forEach(dropdown => {
    const dropdownChild = dropdown.children[0]
     dropdown.attributes['data-dropdown-sorted'] ? 
       
      continents.forEach(continent => {
        const optGroup = document.createElement("optgroup");
        optGroup.label = continent[0].region
        continent.forEach(item => {
          const clonedSelect = dropdownChild.cloneNode()
          clonedSelect.innerText = dropdown.attributes['data-emoji'] ? `${item.name} ${getCountryFlag(item.alpha2Code)}` : item.name;
          clonedSelect.value = item.name
          optGroup.append(clonedSelect)
          dropdown.append(optGroup)
      }) })
      :
      country.forEach(item => {
        const clonedSelect = dropdownChild.cloneNode()
        clonedSelect.innerText = dropdown.attributes['data-emoji'] ? `${item.name} ${getCountryFlag(item.alpha2Code)}` : item.name;
        clonedSelect.value = item.name
        dropdown.append(clonedSelect)
      })

    dropdown.attributes['data-dropdown-search'] &&
      new TomSelect(dropdown, {
        create: false,
        sortField: {
          field: "text",
          direction: "asc",
        },
        render: {
		optgroup_header: function(data, escape) {
			return `<div class="optgroup-header"> <bold> ${escape(data.label)} </bold> </div> `;
		}
	}
      })
  });

}
render()
