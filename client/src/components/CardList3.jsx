import React from 'react'
import Card4 from './Card4'

const CardList3 = () => {
    const cardsData = [
      { link:'Consult Now >',
        description: 'Gynaecology',
        id:'1',
        price:'200',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjzneUGdvJkm1mpEe-RyZwDkccd3iw_Eny5WI0hKyV59lOrCT5rVprsmGaBOYQ-kQvXcE&usqp=CAU',
      },
      { link:'Consult Now >',
        description: 'General Physician',
        id:'2',
        price:'300',
        imageUrl: 'https://i.pinimg.com/736x/7c/46/d1/7c46d10a7ddd73cd773c44531ccc43a5.jpg',
      },
      { link:'Consult Now >',
        description: 'Dermatology',
        id:'3',
        price:'400',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtRCgvgB1bB92n4IyFYYRr4ANODi7_mmvl-iaie2kSkrM2FVJTsTGCQUvTxwd9gOc67jI&usqp=CAU',
      },
      { link:'Consult Now >',
        description: 'Stomach & Digestion',
        id:'4',
        price:'500',
        imageUrl: 'https://cdn.pixabay.com/photo/2021/10/18/22/48/pie-chart-6722292_1280.png',
      },
      { link:'Consult Now >',
        description: 'Psychiatry',
        id:'5',
        price:'600',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsgW5xL_C1ggme9w2IKVUF98mfx710PmxFeHQuTG75cM8ERBqO7Qw1TXwgE_mmbbmYqkE&usqp=CAU',
      },
      { link:'Consult Now >',
        description: 'Pediatrics',
        id:'6',
        price:'700',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRUL2aD3j3SStUZRhW4lMLWIER4tT4Lg6IN7rpNsRf02gI3yn52MQHUlbbVIH-gMd8jag&usqp=CAU',
      },
      { link:'Consult Now >',
        description: 'Cardiologist',
        id:'7',
        price:'800',
        imageUrl: 'https://cdn.pixabay.com/photo/2021/10/18/22/48/pie-chart-6722292_1280.png',
      },
      { link:'Consult Now >',
        description: 'Neurology',
        id:'8',
        price:'900',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsgW5xL_C1ggme9w2IKVUF98mfx710PmxFeHQuTG75cM8ERBqO7Qw1TXwgE_mmbbmYqkE&usqp=CAU',
      },
      { link:'Consult Now >',
        description: 'Ophthalmology',
        id:'9',
        price:'1000',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRUL2aD3j3SStUZRhW4lMLWIER4tT4Lg6IN7rpNsRf02gI3yn52MQHUlbbVIH-gMd8jag&usqp=CAU',
      },
    ];
  
    return (
      <div className="flex flex-row flex-wrap ml-8">
        {cardsData.map((card, index) => (
          <Card4 key={index} {...card} />
        ))}
      </div>
    );
  };
  export default CardList3;