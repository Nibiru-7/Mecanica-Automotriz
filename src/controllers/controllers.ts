import { Request, Response } from 'express';
import { getBlobCSVContent } from '../utils/blobClient';
import { parse } from 'csv-parse/sync';

// Controlador dinámico para cualquier ruta de blob
export const generateAzureController = async (req: Request, res: Response) => {
  const blobPath = req.params.blobPath;
  if (!blobPath) {
    res.status(400).json({ message: 'Falta el nombre del archivo' });
    return;
  }
  try {
    const rawCSV = await getBlobCSVContent("raw", blobPath);
    const records = parse(rawCSV, {
      columns: true,
      skip_empty_lines: true
      
    });
    res.json(records);
  } catch (error) {
    console.error(`Error al obtener archivo:`, error);
    res.status(500).json({ message: `Error al obtener archivo` });
  }
};
/*
export const getDataCargo = generateAzureController('11_Mecanica_Automotriz/pract_11_data_cargo', 'cargo');
export const getDataCategoriaProducto = generateAzureController('11_Mecanica_Automotriz/pract_11_data_categoria_producto', 'categoriaproducto');
export const getDataCliente = generateAzureController('11_Mecanica_Automotriz/pract_11_data_cliente', 'cliente');
export const getDataDetalleVenta = generateAzureController('11_Mecanica_Automotriz/'pract_11_data_detalle_venta', 'detalleventa');
export const getDataFecha = generateAzureController('11_Mecanica_Automotriz/pract_11_data_fecha', 'fecha');
export const getDataMedioPago = generateAzureController('11_Mecanica_Automotriz/pract_11_data_medio_pago', 'mediopago');
export const getDataPersonal = generateAzureController('11_Mecanica_Automotriz/pract_11_data_personal', 'personal');
export const getDataProducto = generateAzureController('11_Mecanica_Automotriz/pract_11_data_producto', 'producto');
export const getDataProveedor = generateAzureController('11_Mecanica_Automotriz/pract_11_data_proveedor', 'proveedor');
export const getDataServicio = generateAzureController('11_Mecanica_Automotriz/pract_11_data_servicio', 'servicio');
export const getDataSucursal = generateAzureController('11_Mecanica_Automotriz/pract_11_data_sucursal', 'sucursal');
export const getDataTipoServicio = generateAzureController('11_Mecanica_Automotriz/pract_11_data_tipo_servicio', 'tiposervicio');
export const getDataVehiculo = generateAzureController('11_Mecanica_Automotriz/pract_11_data_vehiculo', 'vehiculo');
export const getDataVenta = generateAzureController('11_Mecanica_Automotriz/pract_11_data_venta', 'venta');
export const getDataZonaGeografica = generateAzureController('11_Mecanica_Automotriz/'pract_11_data_zona_geografica', 'zonageografica');
*/

