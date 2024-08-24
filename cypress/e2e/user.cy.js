import { it } from 'mocha';
import {
	listUser,
	login,
	url,
	loginFailed,
} from '../data/constants/routes';
import { HTTP_METHOD } from '../http_method/method';
import { userLogin, userLoginFailed } from '../data/users';
import { expect } from 'chai';

describe('get all users reqress', () => {
	//
	it('should success get list users', () => {
		cy.request({
			//
			method: HTTP_METHOD.GET,
			url: url.baseUrl + listUser.allUsers,
		}).then((response) => {
			//
			expect(response.status).to.equal(200);
		});
	});

	it('shoul success login ', () => {
		//
		cy.request({
			method: HTTP_METHOD.POST,
			url: url.baseUrl + login.url,
			body: {
				email: userLogin.email,
				password: userLogin.password,
			},
		}).then((response) => {
			//
			expect(response.status).to.equal(200);
			expect(response.body).to.equal(response.body);
		});

		console.table(url.baseUrl + login.url);
	});

	it('shuld failed login', () => {
		cy.request({
			method: HTTP_METHOD.POST,
			url: url.baseUrl + loginFailed.url,
			body: {
				email: userLoginFailed.email,
				password: userLoginFailed.password,
			},
		}).then((response) => {
			//
			expect(response.status).to.equal(201);
			expect(response.body).to.equal(response.body);
		});
	});
});
