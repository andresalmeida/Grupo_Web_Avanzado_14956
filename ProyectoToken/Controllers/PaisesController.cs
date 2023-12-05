using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ProyectoToken.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaisesController : ControllerBase
    {
    
        /// <summary>
        /// Obtiene un país por su ID.
        /// </summary>
        /// <param name="id">ID del país.</param>
        /// <returns>Detalles del país.</returns>
        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> ObtenerPorId(int id)
        {
            // Implementación para obtener un país por su ID (GET)
            var pais = $"País con ID: {id}";
            return Ok(pais);
        }

        /// <summary>
        /// Crea un nuevo país.
        /// </summary>
        /// <param name="nombrePais">Nombre del nuevo país.</param>
        /// <returns>Respuesta con el nuevo país creado.</returns>
        [Authorize]
        [HttpPost]
        [Route("Crear")]
        public async Task<IActionResult> Crear([FromBody] string nombrePais)
        {
            // Implementación para crear un nuevo país (POST)
            var nuevoPais = $"Nuevo país creado: {nombrePais}";
            return CreatedAtAction(nameof(ObtenerPorId), new { id = 1 }, nuevoPais);
        }

        /// <summary>
        /// Actualiza un país por su ID.
        /// </summary>
        /// <param name="id">ID del país a actualizar.</param>
        /// <param name="nombrePais">Nuevo nombre del país.</param>
        /// <returns>Respuesta con el país actualizado.</returns>
        [Authorize]
        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Actualizar(int id, [FromBody] string nombrePais)
        {
            // Implementación para actualizar un país por su ID (PUT)
            var paisActualizado = $"País con ID {id} actualizado a: {nombrePais}";
            return Ok(paisActualizado);
        }

        /// <summary>
        /// Elimina un país por su ID.
        /// </summary>
        /// <param name="id">ID del país a eliminar.</param>
        /// <returns>Respuesta confirmando la eliminación del país.</returns>
        [Authorize]
        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Borrar(int id)
        {
            // Implementación para eliminar un país por su ID (DELETE)
            var paisEliminado = $"País con ID {id} eliminado correctamente";
            return Ok(paisEliminado);
        }
    }
}