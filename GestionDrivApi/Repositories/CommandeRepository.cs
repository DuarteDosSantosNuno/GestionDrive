using GestionDrivApi.Data;
using GestionDrivApi.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GestionDrivApi.Repositories
{
    public class CommandeRepository
    {
        private ApplicationContext _applicationContext;
        private UserRepository _userRepository;

        public CommandeRepository(ApplicationContext applicationContext,UserRepository userRepository)
        {
            _applicationContext = applicationContext;
            _userRepository = userRepository;   
        }

        public async Task<List<Commande>> FindAll()
        {
            return await FindAll(true);
        }

        public async Task<List<Commande>> FindAll(bool lazy)
        {
            try
            {
                List<Commande> commandes = null;
                if (lazy)
                    commandes = await _applicationContext.Commandes.Where(c => c.Status != StatusCommandeEnum.annuler).OrderBy(c => c.Id).ToListAsync();
                else
                    commandes = await _applicationContext.Commandes.OrderBy(c => c.Id).ToListAsync();

                return commandes;
            }
            catch (InvalidOperationException e)
            {
                return null;
                throw;
            }
        }

        public async Task<Commande> FindById(int id)
        {
            try
            {
                Commande commande = await _applicationContext.Commandes
                            .Include(p => p.Product)
                            .Include(c => c.Client)
                            .Include(e => e.Employee)
                            .Where(cm => cm.Id == id).FirstOrDefaultAsync();
                return commande;
            }
            catch (InvalidOperationException e)
            {
                return null;
            }
        }

        public async Task<List<Commande>> FindByNumeroCommande(string numeroCommande)
        {
            return await FindByNumeroCommande(numeroCommande, true);
        }

        public async Task<List<Commande>> FindByNumeroCommande(string numeroCommande, bool lazy)
        {
            try
            {
                List<Commande> listCommandes = null;
                if (lazy)
                {
                    listCommandes = await _applicationContext.Commandes
                            .Include(p => p.Product)
                            .Include(c => c.Client)
                            .Include(e => e.Employee)
                            .Where(cm => cm.NumeroCommande == numeroCommande & cm.Status == StatusCommandeEnum.encours)
                            .ToListAsync();
                } else
                {
                    listCommandes = await _applicationContext.Commandes
                            .Include(p => p.Product)
                            .Include(c => c.Client)
                            .Include(e => e.Employee)
                            .Where(cm => cm.NumeroCommande == numeroCommande & cm.Status == StatusCommandeEnum.encours & cm.DatePreparation != null)
                            .ToListAsync();
                }
                return listCommandes;
            }
            catch (InvalidOperationException e)
            {
                return null;
            }
        }

        public async Task<List<Commande>> FindByStatus(StatusCommandeEnum status)
        {
            try
            {
                List<Commande> cm = await _applicationContext.Commandes
                            .Include(p => p.Product)
                            .Include(c => c.Client)
                            .Include(e => e.Employee)
                            .Where(cm => cm.Status == status).ToListAsync();
                return cm;
            }
            catch (InvalidOperationException e)
            {
                return null;
            }
        }

        public async Task<List<Commande>> FindByDateLivraison(DateTime dateLivraison)
        {
            try
            {
                //DateTime dd = dateLivraison.Date;
                //TimeSpan tt = dateLivraison.TimeOfDay;
                //DateTime? d = await _applicationContext.Commandes
                //                    .Where(c => c.Id == 1)
                //                    .Select(c => c.DateLivraison)
                //                    .FirstOrDefaultAsync();

                List<Commande> cm = await _applicationContext.Commandes
                            .Include(p => p.Product)
                            .Include(c => c.Client)
                            .Include(e => e.Employee)
                            .Where(cm => cm.DateLivraison.Value.Date == dateLivraison.Date & cm.Status != StatusCommandeEnum.annuler)
                            .ToListAsync();
                return cm;
            }
            catch (InvalidOperationException e)
            {
                return null;
            }
        }

        public async Task<List<Commande>> FindByDateCommande(DateTime dateCommande)
        {
            try
            {
                List<Commande> cm = await _applicationContext.Commandes
                            .Include(p => p.Product)
                            .Include(c => c.Client)
                            .Include(e => e.Employee)
                            .Where(cm => cm.DateCommande.Date == dateCommande.Date & cm.Status != StatusCommandeEnum.annuler).ToListAsync();
                return cm;
            }
            catch (InvalidOperationException e)
            {
                return null;
            }
        }

        public async Task<bool> ExistsByNumeroCommande(string noCommande)
        {
            try
            {
                Commande c = await _applicationContext.Commandes.SingleAsync(c => c.NumeroCommande == noCommande );
                return c != null ? true : false;
            }
            catch (Exception e)
            {
                return false;
                throw;
            }
        }

        public async Task<List<Commande>> Create(List<Commande> newCommande)
        {
            try
            {
                Personne client = null;
                if (newCommande[0].Client != null)
                    client = _userRepository.FindById(newCommande[0].Client.Id); //id de personne(client) connecté

                string numeroCommande = await GenereateNumeroCommmande();
  
                foreach (var c in newCommande)
                {
                    c.NumeroCommande = numeroCommande;
                    c.DateCommande = DateTime.Now;
                    c.Status = StatusCommandeEnum.encours;
                    c.Client = client;

                    _applicationContext.ChangeTracker.Clear();
                    _applicationContext.Commandes.Attach(c);
                    await _applicationContext.Commandes.AddAsync(c);
                    await _applicationContext.SaveChangesAsync();
                }
                return newCommande;
            }
            catch (Exception e)
            {
                return null;
                throw;
            }
        }

        public async Task<bool> PrisEnCharge(string numeroCommande,string idPersonne)
        {
            try
            {
                List<Commande> commande = await FindByNumeroCommande(numeroCommande);
                if (commande.Count == 0)
                    return false;

                foreach (var c in commande)
                {
                    c.DatePreparation = DateTime.Now;
                    c.Employee = _userRepository.FindById(idPersonne); //id de personne(employee) connecté
                    await _applicationContext.SaveChangesAsync();
                }
                return true;
            }
            catch (Exception e)
            {
                return false;
                throw;
            }
        }

        public async Task<bool> Ternimer(string numeroCommande)
        {
            try
            {
                List<Commande> commande = await FindByNumeroCommande(numeroCommande,false);
                if (commande.Count == 0)
                    return false;

                foreach (var c in commande)
                {
                    c.Status = StatusCommandeEnum.terminer;
                    await _applicationContext.SaveChangesAsync();
                }
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public async Task<bool> DeleteByNumeroCommande(string numeroCommande) //cancel the order
        {
            try
            {
                List<Commande> commande = await FindByNumeroCommande(numeroCommande);
                if (commande.Count == 0)
                    return false;

                foreach (var c in commande)
                {
                    c.Status = StatusCommandeEnum.annuler;
                    await _applicationContext.SaveChangesAsync();
                }
                return true;
            }
            catch (Exception e)
            {
                return false;
                throw;
            }
        }

        public async Task<string> GenereateNumeroCommmande()
        {
            string noCommande;
            List<Commande> data = await FindAll(false);
            if (data.Count == 0)
                noCommande = "0000000001";
            else
            {
                var lastCommandeNo = _applicationContext.Commandes.ToList().Max(e => Convert.ToInt64(e.NumeroCommande));
                lastCommandeNo += 1;
                noCommande = lastCommandeNo.ToString().PadLeft(10).Replace(" ", "0");
            }

            return noCommande;
        }
    }
}
