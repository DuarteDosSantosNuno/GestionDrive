using GestionDrivApi.Entities;
using GestionDrivApi.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;




namespace GestionDrivApi.Controllers
{

    [Route("api/v1/[controller]")]
    [ApiController]
    public class UnitsController : Controller
    {
        private UnitRepository _unitRepository;


        public UnitsController(UnitRepository unitRepository)
        {
            _unitRepository = unitRepository;          
        }

        [HttpGet]
        public async Task<IActionResult> FindAll()
        {
            try
            {
                List<Unit> listeUnit = await _unitRepository.FindAll();
                if (listeUnit == null)
                    return NotFound();
                else
                    return Ok(listeUnit);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }


        [HttpGet("FindById")]
        public Unit GetById(int id)
        {
            try
                {
                    Unit unit = _unitRepository.FindById(id);
                    if (unit == null)
                        return null;
                    else
                        return unit;
                }
                catch (Exception e)
                {
                    return null;
                }
            
        }

        [HttpGet("existUnit")]
        public bool GetExists(string unit)
        {
            try
            {
                return _unitRepository.Exists(unit);
            } 
            catch (Exception ex)
            {
                return false;
            }
            
        }


        [HttpGet("GetByUnit")]
        public List<Unit> GetByUnit(string unit)
        {
            return _unitRepository.FindByUnit(unit);
        }


        [HttpPost("Create")]
        public IActionResult Create([FromBody] Unit newUnit)
        {
            Unit unit = _unitRepository.Create(newUnit);
            return CreatedAtAction(nameof(GetById), new { id = newUnit.Id }, newUnit);
        }

       
        [HttpDelete("Delete")]
        public IActionResult Delete([FromRoute] int id)
        {
            OkObjectResult deleteResult = new OkObjectResult(_unitRepository.Delete(id));
            return deleteResult;
        }

        [HttpPut("Modify")]
        public IActionResult Modify(Unit newUnit)
        {
            OkObjectResult modifytResult = new OkObjectResult(_unitRepository.Modify(newUnit));
            return modifytResult;

        }

    }
}
