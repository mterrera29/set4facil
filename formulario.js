{escuelas.map((escuela, index) => (
  <Accordion className="mb-3 custom-accordion "
  key={index}>
    <Accordion.Item eventKey="0"> 
      <Accordion.Header>Datos de la escuela #{index + 1}</Accordion.Header>
      <Accordion.Body>
        <Form.Group className="mb-3">
          <Form.Label>Cargo del que es titular</Form.Label>
          <Form.Control size="sm" type="text" name='' {...register(`cargoTitular${index+1}`)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Escuela N°</Form.Label>
          <Form.Control size="sm" type="text" name='' {...register(`escuela${index+1}`)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Distrito</Form.Label>
          <Form.Control size="sm" type="text" name='' {...register(`distrito${index+1}`)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Cargo que desempeña actualmente</Form.Label>
          <Form.Control type="text" name='' {...register(`cargoActual${index+1}`)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Organismo, repartición o dependencia</Form.Label>
          <Form.Control type="text" name='' {...register(`organismo${index+1}`)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>¿Desde qué fecha?:</Form.Label>
            <Form.Group>
              <label>Día</label>
              <select {...register(`fechaDia${index+1}`)}>
               {optionsDia}
             </select>
              <label>Mes</label>
              <select {...register(`fechaMes${index+1}`)}>
               {optionsMes}
             </select>
              <label>Año</label>
              <select {...register(`fechaAño${index+1}`)}>
               {optionsMuchosAños}
             </select>
            </Form.Group>
        </Form.Group>
        <Button variant="danger" onClick={()=>{eliminarEscuela(index)}} className="mb-3" > Eliminar Escuela</Button>
      </Accordion.Body>
    </Accordion.Item>
  </Accordion >
))}