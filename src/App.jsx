import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';
import FormDatos from './components/FormDatos';
import FormEscuelasTodas from './components/FormEscuelasTodas';
import FormLugarFecha from './components/FormLugarFecha';
import GeneratePDF from './components/GeneratePDF';
import Button from '@mui/material/Button';
import FormCompleted from './components/FormCompleted';
import DrawerAppBar from './components/NavBar';
import NavButtons from './components/NavButtons';

import MainTitleButton from './components/MainTitleButton';

function App() {
  const [id, setId] = useState(1);
  const [data, setData] = useState({});
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [escuelas, setEscuelas] = useState([{ id: id }]);
  const [page, setPage] = useState(0);
  const [defaultData, setDefaultData] = useState();

  const dataLocal = JSON.parse(localStorage.getItem(`data`));

  useEffect(() => {
    dataLocal && setDefaultData(dataLocal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextPage = () => {
    handleSubmit(onSubmit);
    if (page < 5) return setPage((prevPage) => prevPage + 1);
    console.log('eaaa');
  };

  const previuosPage = () => {
    if (page > 0) return setPage((prevPage) => prevPage - 1);
  };

  const agregarEscuela = () => {
    setId((prevID) => prevID + 1);
    setEscuelas([...escuelas, { id: id + 1 }]);
  };

  const eliminarEscuela = (index, id) => {
    if (escuelas.length > 1) {
      const nuevasEscuelas = [...escuelas];
      nuevasEscuelas.splice(index, 1);
      setEscuelas(nuevasEscuelas);

      const newData = { ...data };
      delete newData.escuelas[`escuela${id}`];
      setData(newData);
    }
  };

  useEffect(() => {
    if (data.length === 0) {
      setData(dataLocal);
    }
  }, [data, dataLocal]);

  const saveLocal = () => {
    localStorage.setItem(`data`, JSON.stringify(data));
  };

  const onSubmit = (data) => {
    setData(data);
  };
  return (
    <>
      <main className='main'>
        <DrawerAppBar />
        <section className={page === 0 ? 'contentLanding' : 'content'}>
          <article className='cardContent'>
            <article
              className={page === 0 && 'landing'}
              style={{ padding: '10px', marginTop: '60px' }}
            >
              {page === 0 && <MainTitleButton nextPage={nextPage} />}
              <form
                onChange={handleSubmit(onSubmit)}
                className='form'
                style={{ position: 'relative' }}
                onSubmit={(e) => {
                  e.preventDefault(); // Previene la recarga de la página
                  handleSubmit(onSubmit)();
                  nextPage();
                }}
              >
                {page === 1 && (
                  <FormDatos
                    register={register}
                    defaultData={defaultData}
                    errors={errors}
                  />
                )}
                {page === 2 && (
                  <FormEscuelasTodas
                    defaultData={defaultData}
                    agregarEscuela={agregarEscuela}
                    register={register}
                    escuelas={escuelas}
                    eliminarEscuela={eliminarEscuela}
                    handleSubmit={handleSubmit}
                  />
                )}
                {page === 3 && (
                  <FormLugarFecha
                    defaultData={defaultData}
                    register={register}
                  />
                )}
                {page === 4 && (
                  <>
                    <FormCompleted data={data} escuelas={escuelas} />
                    <Button
                      variant='contained'
                      color='success'
                      onClick={() => {
                        handleSubmit(onSubmit);
                        nextPage();
                        saveLocal();
                      }}
                    >
                      Generar SET4
                    </Button>
                  </>
                )}
                {page === 5 && (
                  <GeneratePDF
                    color='success'
                    escuelas={escuelas}
                    data={data}
                  />
                )}
                <NavButtons page={page} previuosPage={previuosPage} />
              </form>
            </article>
          </article>
          <footer>
            <div
              style={{
                fontSize: '15px',
                textAlign: 'center',
                lineHeight: '1.125',
                color: 'rgb(82, 82, 82, 0.8)',
                padding: '10px',
                alignSelf: 'flex-end',
              }}
            >
              Sitio web NO OFICIAL. Diseñado por docentes para docentes.
            </div>
          </footer>
        </section>
      </main>
    </>
  );
}
export default App;
