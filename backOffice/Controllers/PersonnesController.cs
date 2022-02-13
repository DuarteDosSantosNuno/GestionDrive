﻿using backOffice.Models;
using backOffice.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace backOffice.Controllers
{
    public class PersonnesController : Controller
    {
        private PersonnesRestServices _personnesRestServices;
        private IHttpContextAccessor _httpContextAccessor;

        public PersonnesController(
            PersonnesRestServices personnesRestServices, 
            IHttpContextAccessor httpContextAccessor)
        {
            _personnesRestServices = personnesRestServices;
            _httpContextAccessor = httpContextAccessor;
        }

        // GET: PersonnesController
        public async Task<ActionResult> Index()
        {
            List<Personne> users = await _personnesRestServices.FindAll();

            this.ViewData["users"] = users;

            return View("Views/Personnes/Index.cshtml");
        }

        // GET: PersonnesController
        public async Task<ActionResult> FindByEmail(string email)
        {
            Personne user = await _personnesRestServices.FindByEmail(email);
            return await ToIndexPage(user);
        }

        public async Task<ActionResult> SetRoleAdmin(string id)
        {
            await _personnesRestServices.SetRoleAdmin(id);

            Personne user = await _personnesRestServices.FindById(id);
            return await ToIndexPage(user);
        }

        public async Task<ActionResult> SetRoleClient(string id)
        {
            await _personnesRestServices.SetRoleClient(id);

            Personne user = await _personnesRestServices.FindById(id);
            return await ToIndexPage(user);
        }

        public async Task<ActionResult> SetRoleEmployee(string id)
        {
            await _personnesRestServices.SetRoleEmployee(id);

            Personne user = await _personnesRestServices.FindById(id);
            return await ToIndexPage(user);
        }

        private async Task<ActionResult> ToIndexPage(Personne user)
        {
            List<Personne> users = new List<Personne>();
            users.Add(user);

            this.ViewData["users"] = users;
            this.ViewData["userRoles"] = await _personnesRestServices.GetRoles(user.Id);

            return View("Views/Personnes/Index.cshtml");
        }

        // GET: PersonnesController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: PersonnesController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: PersonnesController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: PersonnesController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: PersonnesController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: PersonnesController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: PersonnesController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
