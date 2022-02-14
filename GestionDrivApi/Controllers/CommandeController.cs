using GestionDrivApi.Entities;
using GestionDrivApi.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GestionDrivApi.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    //[Authorize]
    public class CommandeController : Controller
    {
        private CommandeRepository _commandeRepository;

        public CommandeController(CommandeRepository commandeRepository)
        {
            _commandeRepository = commandeRepository;
        }

        [HttpGet]
        public async Task<IActionResult> FindAll()
        {
            try
            {
                List<Commande> listeCommande = await _commandeRepository.FindAll();
                if (listeCommande == null)
                    return NotFound();
                else
                    return Ok(listeCommande);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }

        [HttpGet("Status")]
        public async Task<IActionResult> FindByStatus(StatusCommandeEnum status)
        {
            try
            {
                List<Commande> listeCommande = await _commandeRepository.FindByStatus(status);
                if (listeCommande == null)
                    return NotFound("la commande n'existe pas");
                else
                    return Ok(listeCommande);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }

        [HttpGet("DateLivraison")]
        public async Task<IActionResult> FindByDateLivraison(DateTime dateLivraison)
        {
            try
            {
                List<Commande> listeCommande = await _commandeRepository.FindByDateLivraison(dateLivraison);
                if (listeCommande == null)
                    return NotFound("la commande n'existe pas");
                else
                    return Ok(listeCommande);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }

        [HttpGet("DateCommande")]
        public async Task<IActionResult> FindByDateCommande(DateTime dateCommande)
        {
            try
            {
                List<Commande> listeCommande = await _commandeRepository.FindByDateCommande(dateCommande);
                if (listeCommande == null)
                    return NotFound("la commande n'existe pas");
                else
                    return Ok(listeCommande);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Create(List<Commande> newCommande)
        {
            try
            {
                List<Commande> commande = await _commandeRepository.Create(newCommande);
                return CreatedAtAction(nameof(Create), new { id = commande[0].NumeroCommande }, commande);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut("Prisencharge")]
        public async Task<IActionResult> PrisEnCharge(string numeroCommande, string idPersonne)
        {
            try
            {
                OkObjectResult prisEnChargeResult = new OkObjectResult(await _commandeRepository.PrisEnCharge(numeroCommande,idPersonne));
                if (prisEnChargeResult.Value is false)
                    return BadRequest("La commande n'existe pas");
                else
                    return prisEnChargeResult;
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut("Terminer")]
        public async Task<IActionResult> Terminer(string numeroCommande)
        {
            try
            {
                OkObjectResult terminerResult = new OkObjectResult(await _commandeRepository.Ternimer(numeroCommande));
                if (terminerResult.Value is false)
                    return BadRequest("La commande n'existe pas");
                else
                    return terminerResult;
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete]
        public async Task<IActionResult> Delete(string numeroCommande)
        {
            try
            {
                OkObjectResult deleteResult = new OkObjectResult(await _commandeRepository.DeleteByNumeroCommande(numeroCommande));
                if (deleteResult.Value is false)
                    return BadRequest("La commande n'existe pas");
                else
                    return deleteResult;
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

    }
}
