import React, { FC, useEffect } from 'react';
import Example from '@/components/example/Example.component';
import api from '@/io/api';

const fetchKafka = async() => {
  console.log('LOG: fetchKafka -> fetchKafka');
  try {
    const { data } = await api.get('/subjects');
    const { data: subject } = await api.get(`/subjects/${data[0]}/versions/1`);
    console.log('LOG: fetchKafka -> subject', JSON.parse(subject.schema));
    
  } catch (error) {
  console.log('LOG: fetchKafka -> error', error);
    
  }
}

const HomeView: FC = () => {
  useEffect(() => {
    fetchKafka();
  }, []);
  return (
  <>
    Home
    <br />
    <Example />
  </>
  )
};

export default HomeView;
