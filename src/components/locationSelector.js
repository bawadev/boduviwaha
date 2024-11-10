// components/LocationSelector.js
import { useState, useEffect } from "react";
import { Box, Text, Label, Heading, Select } from "theme-ui";

export const locations = [
  {
    "province": "Western Province",
    "districts": [
      {
        "district": "Colombo",
        "towns": [
          {"town": "Colombo", "lat": "6.9271", "lon": "79.8612"},
          {"town": "Dehiwala-Mount Lavinia", "lat": "6.8390", "lon": "79.8650"},
          {"town": "Moratuwa", "lat": "6.7730", "lon": "79.8810"},
          {"town": "Sri Jayawardenepura Kotte", "lat": "6.9271", "lon": "79.9591"},
          {"town": "Battaramulla", "lat": "6.9075", "lon": "79.9470"},
          {"town": "Kolonnawa", "lat": "6.9336", "lon": "79.9024"},
          {"town": "Maharagama", "lat": "6.8463", "lon": "79.9284"},
          {"town": "Homagama", "lat": "6.8400", "lon": "80.0000"},
          {"town": "Piliyandala", "lat": "6.7946", "lon": "79.9073"},
          {"town": "Nugegoda", "lat": "6.8679", "lon": "79.9073"}
        ]
      },
      {
        "district": "Gampaha",
        "towns": [
          {"town": "Negombo", "lat": "7.2083", "lon": "79.8358"},
          {"town": "Gampaha", "lat": "7.0916", "lon": "79.9983"},
          {"town": "Veyangoda", "lat": "7.1628", "lon": "80.0778"},
          {"town": "Ragama", "lat": "7.0323", "lon": "79.9287"},
          {"town": "Minuwangoda", "lat": "7.1795", "lon": "79.9607"},
          {"town": "Ja-Ela", "lat": "7.0795", "lon": "79.8948"},
          {"town": "Wattala", "lat": "6.9816", "lon": "79.8873"},
          {"town": "Divulapitiya", "lat": "7.2272", "lon": "80.0036"},
          {"town": "Mirigama", "lat": "7.2561", "lon": "80.1353"},
          {"town": "Seeduwa", "lat": "7.1452", "lon": "79.8856"}
        ]
      },
      {
        "district": "Kalutara",
        "towns": [
          {"town": "Kalutara", "lat": "6.5833", "lon": "79.9610"},
          {"town": "Panadura", "lat": "6.7100", "lon": "79.9073"},
          {"town": "Beruwala", "lat": "6.4750", "lon": "79.9833"},
          {"town": "Horana", "lat": "6.7159", "lon": "80.0635"},
          {"town": "Wadduwa", "lat": "6.6409", "lon": "79.9497"},
          {"town": "Matugama", "lat": "6.5151", "lon": "80.1221"},
          {"town": "Aluthgama", "lat": "6.4207", "lon": "79.9935"},
          {"town": "Bandaragama", "lat": "6.7125", "lon": "80.0016"},
          {"town": "Ingiriya", "lat": "6.7166", "lon": "80.1823"},
          {"town": "Dodangoda", "lat": "6.5315", "lon": "80.0474"}
        ]
      }
    ]
  },
  {
    "province": "Central Province",
    "districts": [
      {
        "district": "Kandy",
        "towns": [
          {"town": "Kandy", "lat": "7.2906", "lon": "80.6337"},
          {"town": "Peradeniya", "lat": "7.2590", "lon": "80.5972"},
          {"town": "Gampola", "lat": "7.1647", "lon": "80.5696"},
          {"town": "Kadugannawa", "lat": "7.2564", "lon": "80.5330"},
          {"town": "Nawalapitiya", "lat": "7.0524", "lon": "80.5361"},
          {"town": "Pilimathalawa", "lat": "7.2546", "lon": "80.5752"},
          {"town": "Wattegama", "lat": "7.3273", "lon": "80.6773"},
          {"town": "Katugastota", "lat": "7.3244", "lon": "80.6156"},
          {"town": "Digana", "lat": "7.2922", "lon": "80.7767"},
          {"town": "Doluwa", "lat": "7.1448", "lon": "80.6178"}
        ]
      },
      {
        "district": "Matale",
        "towns": [
          {"town": "Matale", "lat": "7.4675", "lon": "80.6234"},
          {"town": "Dambulla", "lat": "7.8730", "lon": "80.6517"},
          {"town": "Sigiriya", "lat": "7.9519", "lon": "80.7582"},
          {"town": "Rattota", "lat": "7.4541", "lon": "80.6730"},
          {"town": "Ukuwela", "lat": "7.4623", "lon": "80.6361"},
          {"town": "Nalanda", "lat": "7.5774", "lon": "80.5950"},
          {"town": "Galewela", "lat": "7.7282", "lon": "80.5771"},
          {"town": "Yatawatta", "lat": "7.5356", "lon": "80.6252"},
          {"town": "Palapathwela", "lat": "7.5323", "lon": "80.6210"},
          {"town": "Pallepola", "lat": "7.6016", "lon": "80.5683"}
        ]
      },
      {
        "district": "Nuwara Eliya",
        "towns": [
          {"town": "Nuwara Eliya", "lat": "6.9497", "lon": "80.7891"},
          {"town": "Hatton", "lat": "6.8970", "lon": "80.5948"},
          {"town": "Talawakelle", "lat": "6.9370", "lon": "80.6578"},
          {"town": "Nawalapitiya", "lat": "7.0524", "lon": "80.5361"},
          {"town": "Maskeliya", "lat": "6.8300", "lon": "80.5456"},
          {"town": "Ginigathena", "lat": "6.9683", "lon": "80.4930"},
          {"town": "Ragala", "lat": "6.9580", "lon": "80.8644"},
          {"town": "Walapane", "lat": "7.0000", "lon": "80.9000"},
          {"town": "Ambewela", "lat": "6.8790", "lon": "80.8105"},
          {"town": "Pundaluoya", "lat": "7.0000", "lon": "80.6833"}
        ]
      }
    ]
  },
  {
    "province": "Southern Province",
    "districts": [
      {
        "district": "Galle",
        "towns": [
          {"town": "Galle", "lat": "6.0535", "lon": "80.2209"},
          {"town": "Hikkaduwa", "lat": "6.1403", "lon": "80.1045"},
          {"town": "Ambalangoda", "lat": "6.2359", "lon": "80.0591"},
          {"town": "Balapitiya", "lat": "6.2758", "lon": "80.0379"},
          {"town": "Elpitiya", "lat": "6.3397", "lon": "80.1343"},
          {"town": "Karapitiya", "lat": "6.0508", "lon": "80.2239"},
          {"town": "Bentota", "lat": "6.4281", "lon": "80.0032"},
          {"town": "Ahangama", "lat": "5.9730", "lon": "80.3202"},
          {"town": "Unawatuna", "lat": "6.0098", "lon": "80.2466"},
          {"town": "Koggala", "lat": "5.9995", "lon": "80.3377"}
        ]
      },
      {
        "district": "Matara",
        "towns": [
          {"town": "Matara", "lat": "5.9549", "lon": "80.5550"},
          {"town": "Weligama", "lat": "5.9736", "lon": "80.4297"},
          {"town": "Dikwella", "lat": "5.9676", "lon": "80.6948"},
          {"town": "Akurassa", "lat": "6.0951", "lon": "80.4649"},
          {"town": "Deniyaya", "lat": "6.2989", "lon": "80.5916"},
          {"town": "Hakmana", "lat": "6.0355", "lon": "80.6646"},
          {"town": "Kamburupitiya", "lat": "6.0414", "lon": "80.5684"},
          {"town": "Thihagoda", "lat": "6.0347", "lon": "80.5644"},
          {"town": "Mirissa", "lat": "5.9483", "lon": "80.4617"},
          {"town": "Yatiyana", "lat": "5.9990", "lon": "80.5381"}
        ]
      },
      {
        "district": "Hambantota",
        "towns": [
          {"town": "Hambantota", "lat": "6.1248", "lon": "81.1185"},
          {"town": "Tangalle", "lat": "6.0242", "lon": "80.7948"},
          {"town": "Tissamaharama", "lat": "6.2748", "lon": "81.2873"},
          {"town": "Beliatta", "lat": "6.0421", "lon": "80.7342"},
          {"town": "Ambalantota", "lat": "6.1212", "lon": "81.0200"},
          {"town": "Weeraketiya", "lat": "6.0853", "lon": "80.7857"},
          {"town": "Suriyawewa", "lat": "6.2380", "lon": "81.0183"},
          {"town": "Walasmulla", "lat": "6.0848", "lon": "80.7168"},
          {"town": "Kataragama", "lat": "6.4203", "lon": "81.3283"},
          {"town": "Lunugamvehera", "lat": "6.4231", "lon": "81.1739"}
        ]
      }
    ]
  },
  {
    "province": "Northern Province",
    "districts": [
      {
        "district": "Jaffna",
        "towns": [
          {"town": "Jaffna", "lat": "9.6615", "lon": "80.0255"},
          {"town": "Nallur", "lat": "9.6737", "lon": "80.0233"},
          {"town": "Chavakachcheri", "lat": "9.6570", "lon": "80.1621"},
          {"town": "Point Pedro", "lat": "9.8167", "lon": "80.2333"},
          {"town": "Kopay", "lat": "9.7020", "lon": "80.0422"},
          {"town": "Karainagar", "lat": "9.7167", "lon": "79.9083"},
          {"town": "Velanai", "lat": "9.6400", "lon": "79.8761"},
          {"town": "Vaddukoddai", "lat": "9.7272", "lon": "79.9833"},
          {"town": "Tellippalai", "lat": "9.7573", "lon": "80.0219"},
          {"town": "Atchuvely", "lat": "9.7474", "lon": "80.0682"}
        ]
      },
      {
        "district": "Kilinochchi",
        "towns": [
          {"town": "Kilinochchi", "lat": "9.3788", "lon": "80.3846"},
          {"town": "Pallai", "lat": "9.6646", "lon": "80.3075"},
          {"town": "Mulankavil", "lat": "9.2463", "lon": "80.3420"},
          {"town": "Paranthan", "lat": "9.4220", "lon": "80.4152"},
          {"town": "Poonakary", "lat": "9.3021", "lon": "80.2056"},
          {"town": "Kandavalai", "lat": "9.4572", "lon": "80.5067"},
          {"town": "Vanneri", "lat": "9.3464", "lon": "80.2591"},
          {"town": "Murukandy", "lat": "9.3800", "lon": "80.4500"},
          {"town": "Elephant Pass", "lat": "9.4906", "lon": "80.4320"},
          {"town": "Iranamadu", "lat": "9.3581", "lon": "80.4531"}
        ]
      },
      {
        "district": "Mannar",
        "towns": [
          {"town": "Mannar", "lat": "8.9780", "lon": "79.9040"},
          {"town": "Thalaimannar", "lat": "9.0840", "lon": "79.7389"},
          {"town": "Pesalai", "lat": "9.0185", "lon": "79.8047"},
          {"town": "Madhu", "lat": "8.7667", "lon": "80.1167"},
          {"town": "Murunkan", "lat": "8.9081", "lon": "80.0594"},
          {"town": "Nanattan", "lat": "8.9264", "lon": "79.9519"},
          {"town": "Vankalai", "lat": "8.9176", "lon": "79.9383"},
          {"town": "Parappakandal", "lat": "8.8716", "lon": "79.9612"},
          {"town": "Adampan", "lat": "8.8548", "lon": "80.0040"},
          {"town": "Manthai", "lat": "8.9789", "lon": "79.8833"}
        ]
      }
    ]
  },
  {
    "province": "Eastern Province",
    "districts": [
      {
        "district": "Trincomalee",
        "towns": [
          {"town": "Trincomalee", "lat": "8.5874", "lon": "81.2152"},
          {"town": "Kinniya", "lat": "8.5133", "lon": "81.1849"},
          {"town": "Mutur", "lat": "8.4602", "lon": "81.2734"},
          {"town": "Kantalai", "lat": "8.3545", "lon": "81.0169"},
          {"town": "China Bay", "lat": "8.5314", "lon": "81.2335"},
          {"town": "Morawewa", "lat": "8.6682", "lon": "81.0673"},
          {"town": "Seruwila", "lat": "8.3939", "lon": "81.2975"},
          {"town": "Sampur", "lat": "8.4730", "lon": "81.3133"},
          {"town": "Nilaveli", "lat": "8.7234", "lon": "81.2056"},
          {"town": "Uppuveli", "lat": "8.5990", "lon": "81.2169"}
        ]
      },
      {
        "district": "Batticaloa",
        "towns": [
          {"town": "Batticaloa", "lat": "7.7102", "lon": "81.6924"},
          {"town": "Kattankudy", "lat": "7.6592", "lon": "81.7350"},
          {"town": "Eravur", "lat": "7.7764", "lon": "81.5997"},
          {"town": "Valachchenai", "lat": "7.9156", "lon": "81.5273"},
          {"town": "Kaluwanchikudy", "lat": "7.5137", "lon": "81.7834"},
          {"town": "Oddamavadi", "lat": "7.9333", "lon": "81.5167"},
          {"town": "Chenkalady", "lat": "7.8144", "lon": "81.5965"},
          {"town": "Vakarai", "lat": "8.1452", "lon": "81.4310"},
          {"town": "Kalkudah", "lat": "7.9015", "lon": "81.5384"},
          {"town": "Arayampathy", "lat": "7.6513", "lon": "81.7423"}
        ]
      },
      {
        "district": "Ampara",
        "towns": [
          {"town": "Ampara", "lat": "7.3026", "lon": "81.6743"},
          {"town": "Kalmunai", "lat": "7.4094", "lon": "81.8347"},
          {"town": "Sainthamaruthu", "lat": "7.4213", "lon": "81.8322"},
          {"town": "Akkaraipattu", "lat": "7.2210", "lon": "81.8493"},
          {"town": "Sammanthurai", "lat": "7.3815", "lon": "81.7309"},
          {"town": "Uhana", "lat": "7.2704", "lon": "81.6700"},
          {"town": "Pottuvil", "lat": "6.8763", "lon": "81.8351"},
          {"town": "Thirukkovil", "lat": "7.1194", "lon": "81.8434"},
          {"town": "Damana", "lat": "7.2550", "lon": "81.6375"},
          {"town": "Dehiattakandiya", "lat": "7.4487", "lon": "81.0974"}
        ]
      }
    ]
  },
  {
    "province": "North Western Province",
    "districts": [
      {
        "district": "Kurunegala",
        "towns": [
          {"town": "Kurunegala", "lat": "7.4863", "lon": "80.3647"},
          {"town": "Kuliyapitiya", "lat": "7.4707", "lon": "80.0456"},
          {"town": "Pannala", "lat": "7.2979", "lon": "79.9653"},
          {"town": "Mawathagama", "lat": "7.4677", "lon": "80.4178"},
          {"town": "Narammala", "lat": "7.3798", "lon": "80.1431"},
          {"town": "Wariyapola", "lat": "7.5823", "lon": "80.4265"},
          {"town": "Polgahawela", "lat": "7.3319", "lon": "80.3036"},
          {"town": "Bingiriya", "lat": "7.5276", "lon": "80.0242"},
          {"town": "Alawwa", "lat": "7.3115", "lon": "80.2095"},
          {"town": "Melsiripura", "lat": "7.6215", "lon": "80.4689"}
        ]
      },
      {
        "district": "Puttalam",
        "towns": [
          {"town": "Puttalam", "lat": "8.0307", "lon": "79.8284"},
          {"town": "Chilaw", "lat": "7.5758", "lon": "79.7978"},
          {"town": "Wennappuwa", "lat": "7.3622", "lon": "79.8381"},
          {"town": "Nattandiya", "lat": "7.4222", "lon": "79.8948"},
          {"town": "Mundal", "lat": "7.9204", "lon": "79.8227"},
          {"town": "Madampe", "lat": "7.6489", "lon": "79.8207"},
          {"town": "Anamaduwa", "lat": "7.9341", "lon": "80.0416"},
          {"town": "Kalpitiya", "lat": "8.2401", "lon": "79.7724"},
          {"town": "Dankotuwa", "lat": "7.3167", "lon": "79.8994"},
          {"town": "Palavi", "lat": "8.0189", "lon": "79.8322"}
        ]
      }
    ]
  },
  {
    "province": "North Central Province",
    "districts": [
      {
        "district": "Anuradhapura",
        "towns": [
          {"town": "Anuradhapura", "lat": "8.3114", "lon": "80.4037"},
          {"town": "Kekirawa", "lat": "8.0417", "lon": "80.5982"},
          {"town": "Medawachchiya", "lat": "8.5284", "lon": "80.5079"},
          {"town": "Mihintale", "lat": "8.3500", "lon": "80.5075"},
          {"town": "Habarana", "lat": "8.0360", "lon": "80.7476"},
          {"town": "Eppawala", "lat": "8.1792", "lon": "80.3490"},
          {"town": "Nochchiyagama", "lat": "8.2736", "lon": "80.2208"},
          {"town": "Talawa", "lat": "8.1195", "lon": "80.2301"},
          {"town": "Tambuttegama", "lat": "8.2308", "lon": "80.2220"},
          {"town": "Galenbindunuwewa", "lat": "8.3866", "lon": "80.6125"}
        ]
      },
      {
        "district": "Polonnaruwa",
        "towns": [
          {"town": "Polonnaruwa", "lat": "7.9397", "lon": "81.0028"},
          {"town": "Hingurakgoda", "lat": "7.9794", "lon": "80.9785"},
          {"town": "Medirigiriya", "lat": "8.1677", "lon": "80.9330"},
          {"town": "Dimbulagala", "lat": "7.8831", "lon": "81.0861"},
          {"town": "Welikanda", "lat": "7.8831", "lon": "81.2023"},
          {"town": "Thamankaduwa", "lat": "7.9333", "lon": "81.0000"},
          {"town": "Elahera", "lat": "7.8167", "lon": "80.7500"},
          {"town": "Giritale", "lat": "7.9893", "lon": "80.9770"},
          {"town": "Kaduruwela", "lat": "7.9441", "lon": "80.9838"},
          {"town": "Lankapura", "lat": "7.9892", "lon": "81.0376"}
        ]
      }
    ]
  },
  {
    "province": "Uva Province",
    "districts": [
      {
        "district": "Badulla",
        "towns": [
          {"town": "Badulla", "lat": "6.9847", "lon": "81.0566"},
          {"town": "Bandarawela", "lat": "6.8345", "lon": "80.9925"},
          {"town": "Ella", "lat": "6.8667", "lon": "81.0469"},
          {"town": "Haputale", "lat": "6.7689", "lon": "80.9596"},
          {"town": "Welimada", "lat": "6.9051", "lon": "80.9409"},
          {"town": "Mahiyanganaya", "lat": "7.3461", "lon": "81.0156"},
          {"town": "Hali-Ela", "lat": "6.9892", "lon": "81.0551"},
          {"town": "Passara", "lat": "7.0368", "lon": "81.1550"},
          {"town": "Diyatalawa", "lat": "6.8404", "lon": "80.9861"},
          {"town": "Kandeketiya", "lat": "7.1863", "lon": "81.0456"}
        ]
      },
      {
        "district": "Monaragala",
        "towns": [
          {"town": "Monaragala", "lat": "6.8724", "lon": "81.3440"},
          {"town": "Wellawaya", "lat": "6.7428", "lon": "81.1053"},
          {"town": "Buttala", "lat": "6.7588", "lon": "81.2334"},
          {"town": "Bibile", "lat": "7.1454", "lon": "81.2250"},
          {"town": "Medagama", "lat": "7.1471", "lon": "81.3039"},
          {"town": "Kataragama", "lat": "6.4203", "lon": "81.3283"},
          {"town": "Siyambalanduwa", "lat": "6.9824", "lon": "81.4517"},
          {"town": "Sevanagala", "lat": "6.5708", "lon": "81.3056"},
          {"town": "Tanamalwila", "lat": "6.5681", "lon": "81.2758"},
          {"town": "Kandaudapanguwa", "lat": "7.0995", "lon": "81.3197"}
        ]
      }
    ]
  },
  {
    "province": "Sabaragamuwa Province",
    "districts": [
      {
        "district": "Ratnapura",
        "towns": [
          {"town": "Ratnapura", "lat": "6.6828", "lon": "80.3997"},
          {"town": "Embilipitiya", "lat": "6.3372", "lon": "80.8482"},
          {"town": "Balangoda", "lat": "6.6657", "lon": "80.7057"},
          {"town": "Pelmadulla", "lat": "6.5497", "lon": "80.5481"},
          {"town": "Kuruwita", "lat": "6.7853", "lon": "80.4067"},
          {"town": "Godakawela", "lat": "6.4922", "lon": "80.6078"},
          {"town": "Rakwana", "lat": "6.4767", "lon": "80.5778"},
          {"town": "Opanayaka", "lat": "6.6646", "lon": "80.7075"},
          {"town": "Kiriella", "lat": "6.7276", "lon": "80.3867"},
          {"town": "Kolonne", "lat": "6.3187", "lon": "80.7346"}
        ]
      },
      {
        "district": "Kegalle",
        "towns": [
          {"town": "Kegalle", "lat": "7.2534", "lon": "80.3449"},
          {"town": "Mawanella", "lat": "7.2573", "lon": "80.4443"},
          {"town": "Warakapola", "lat": "7.2100", "lon": "80.2025"},
          {"town": "Rambukkana", "lat": "7.2542", "lon": "80.3867"},
          {"town": "Dehiowita", "lat": "7.0083", "lon": "80.2270"},
          {"town": "Deraniyagala", "lat": "6.9697", "lon": "80.2708"},
          {"town": "Galigamuwa", "lat": "7.1968", "lon": "80.2327"},
          {"town": "Yatiyanthota", "lat": "7.0000", "lon": "80.2765"},
          {"town": "Ruwanwella", "lat": "6.9658", "lon": "80.2008"},
          {"town": "Bulathkohupitiya", "lat": "7.0425", "lon": "80.2469"}
        ]
      }
    ]
  }
];

const LocationSelector = ({ register, setValue, errors }) => {
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [districts, setDistricts] = useState([]);
  const [towns, setTowns] = useState([]);

  // Handle province change
  const handleProvinceChange = (e) => {
    const province = e.target.value;
    setSelectedProvince(province);
    const selectedProvince = locations.find((loc) => loc.province === province);
    setDistricts(selectedProvince ? selectedProvince.districts : []);
    setSelectedDistrict("");
    setTowns([]);

    // Set the selected province in the form
    setValue("province", province);
  };

  // Handle district change
  const handleDistrictChange = (e) => {
    const district = e.target.value;
    setSelectedDistrict(district);
    const selectedDistrict = districts.find((d) => d.district === district);
    setTowns(selectedDistrict ? selectedDistrict.towns : []);

    // Set the selected district in the form
    setValue("district", district);
  };

  // Handle town change
  const handleTownChange = (e) => {
    const town = e.target.value;
    setValue("nearestTown", town); // Set the selected town in the form
  };

  return (
    <>
      <Box style={styles.card}>
        <Heading as="h2" sx={styles.heading}>
          පදිංචිය පිලිබඳ තොරතුරු
        </Heading>
        <Text sx={styles.subHeading}>
          යම් අවස්ථා වලදී ඔබේ ලිපිනය කේතයක් සහිත ලිපියක් මගින් තහවුරු කිරීමට
          සිදුවනු හැක. එමනිසා ලිපිනය දෙවරක් පරික්ෂා කරන්න..
        </Text>
        <Box sx={styles.row}>
          <Box sx={styles.field}>
            <Label htmlFor="province">පළාත</Label>
            <Select
              id="province"
              {...register("province", { required: "Province is required" })}
              value={selectedProvince}
              onChange={handleProvinceChange}
              sx={{ ...styles.input }}
            >
              <option value="">Select Province</option>
              {locations.map((loc) => (
                <option key={loc.province} value={loc.province}>
                  {loc.province}
                </option>
              ))}
            </Select>
            {errors.province && (
              <Text sx={styles.error}>{errors.province.message}</Text>
            )}
          </Box>
          <Box sx={styles.field}>
            <Label htmlFor="district">දිස්ත්‍රික්කය</Label>
            <Select
              id="district"
              {...register("district", { required: "District is required" })}
              value={selectedDistrict}
              onChange={handleDistrictChange}
              disabled={!selectedProvince}
              sx={{ ...styles.input }}
            >
              <option value="">Select District</option>
              {districts.map((district) => (
                <option key={district.district} value={district.district}>
                  {district.district}
                </option>
              ))}
            </Select>
            {errors.district && (
              <Text sx={styles.error}>{errors.district.message}</Text>
            )}
          </Box>
        </Box>
        <Box sx={styles.row}>
          <Box sx={styles.field}>
            
          </Box>
          <Box sx={styles.field}>
            <Label htmlFor="nearestTown">ලඟම නගරය</Label>
            <Select
              id="nearestTown"
              {...register("nearestTown", { required: "Town is required" })}
              onChange={handleTownChange}
              disabled={!selectedDistrict}
              sx={{ ...styles.input }}
            >
              <option value="">Select Town</option>
              {towns.map((town) => (
                <option key={town.town} value={town.town}>
                  {town.town}
                </option>
              ))}
            </Select>
            {errors.nearestTown && (
              <Text sx={styles.error}>{errors.nearestTown.message}</Text>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

const styles = {
  textArea: {
    width: "100%",
    padding: "12px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f8f8f8",
    resize: "vertical",
    fontFamily: "inherit",
    fontSize: "inherit",
    lineHeight: "inherit",
    boxSizing: "border-box",
    transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
    "&:focus": {
      borderColor: "#5b9dd9",
      outline: "none",
      boxShadow: "0 0 0 2px rgba(91, 157, 217, 0.3)",
    },
  },
  description: {
    marginBottom: 20,
  },
  card: {
    padding: 20,
    display: "flex",
    flexDirection: "column",
    border: "1px solid #ddd",
    borderRadius: 8,
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
    marginBottom: 20,
  },
  form: {
    marginBottom: 20,
  },
  Select: {
    borderRadius: 4,
    height: "2.5em",
    fontSize: 16,
    padding: "0 1em",
    border: "1px solid #ccc",
    "@media screen and (max-width: 768px)": {
      fontSize: 14, // Adjust font size for smaller screens
    },
    "&:focus": {
      borderColor: "#5b9dd9",
      outline: "none",
      boxShadow: "0 0 0 2px rgba(91, 157, 217, 0.3)",
    },
  },
  heading: {
    fontSize: [3, 4], // Responsive font size for different screen sizes
    mb: 3,
  },
  subHeading: {
    mb: 3,
    fontSize: 2,
    color: "#555",
  },
  row: {
    display: "flex",
    flexDirection: ["column", "row"], // Stack columns on small screens, row on larger screens
    gap: 3,
    mb: 3,
  },
  field: {
    flex: 1,
    minWidth: 0, // Ensure fields can shrink properly on smaller screens
    marginRight: [0, 3], // Add right margin only on larger screens
  },
  input: {
    width: "100%",
    height: "2.5em",
    mb: 2,
    padding: "0.5em",
    fontSize: 16,
    borderRadius: 4,
    border: "1px solid #ccc",
    "@media screen and (max-width: 768px)": {
      fontSize: 14, // Adjust font size for smaller screens
    },
    "&:focus": {
      borderColor: "#5b9dd9",
      outline: "none",
      boxShadow: "0 0 0 2px rgba(91, 157, 217, 0.3)",
    },
  },
  error: {
    color: "red",
    fontSize: 1,
  },
  button: {
    mt: 3,
    px: 4,
    py: 2,
    fontSize: 2,
    borderRadius: 20,
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "darkblue",
    },
  },
  buttonRow: {
    display: "flex",
    justifyContent: "space-between",
  },
};

export default LocationSelector;
