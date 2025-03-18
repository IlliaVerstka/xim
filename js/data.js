const data = {
	1: {
		text: "1",
		label: "Головні хімічні поняття",
		items: [
			{
				type: "spoller",
				openerText: "Способи розділення сумішей",
				items: [
					{
						text: "Відстоювання",
						tooltip: "Розділення суміші води та олії",
						content: {
							urlVideo: "video/video1.mp4"
						}
					},
					{
						text: "Фільтрування",
						tooltip: "Очищення забрудненої піском солі",
						content: {
							urlVideo: "video/video2.mp4"
						}
					},
					{
						text: "Випарювання",
						tooltip: "Випарювання води з розчину солі",
						content: {
							urlVideo: "video/video2.mp4"
						}
					},
					{
						text: "Кристалізація",
						tooltip: "Кристалізація солі з насиченого розчину плюмбум (ІІ) йодиду, добутого взаємодією плюмбум (ІІ) нітрату з калій йодидом",
						content: {
							urlVideo: "video/video3.mp4",
							popup: {
								formulas: [
									{
										text: "Pb(NO<sub>3</sub>)<sub>2</sub> + 2KI = PbI<sub>2</sub>↓ + 2KNO<sub>3</sub>"
									}
								]
							}
						}
					},
					{
						text: "Перегонка",
						tooltip: "Перегонка водно-спиртової суміші",
						content: {
							urlVideo: "video/video4.mp4"
						}
					}
				]
			},
			{
				type: "spoller",
				openerText: "Умови виникнення та перебігу хімічних реакцій",
				items: [
					{
						text: "Нагрівання",
						tooltip: "Нагрівання - умова виникнення хімічної реакції горіння магнію на повітрі",
						content: {
							urlVideo: "video/video5.mp4",
							popup: {
								formulas: [
									{
										text: "2Mg + O<sub>2</sub> = 2MgO <span class=\"yellow\">+ Q</span>"
									}
								],
								btns: [
									{
										text: "Перейти до розділу \"Метали\"",
										link: "6"
									}
								]
							}
						}
					},
					{
						text: "Нагрівання",
						tooltip: "Нагрівання - умова перебігу реакції розкладу купрум (ІІ) гідроксиду, добутого взаємодією розчинів купрум (ІІ) сульфату та натрій гідроксиду",
						content: {
							urlVideo: "video/video6.mp4",
							popup: {
								formulas: [
									{
										text: "CuSO<sub>4</sub> + 2NaOH = Cu(OH)<sub>2</sub>↓ + Na<sub>2</sub>SO<sub>4</sub>"
									},
									{
										text: "Cu<sup>2+</sup> + 2OH<sup>-</sup> → Cu(OH)<sub>2</sub>↓"
									},
									{
										text: "Cu(OH)<sub>2</sub> + <text-line>→<text-line-text>t<sup>0</sup></text-line-text></text-line> + CuO + H<sub>2</sub>O"
									},
									{
										text: "Cu(OH)<sub>2</sub> + H<sub>2</sub>SO<sub>4</sub> = CuSO<sub>4</sub> + 2H<sub>2</sub>O"
									},
									{
										text: "Cu(OH)<sub>2</sub> + 2H<sup>+</sup> → Cu<sup>2+</sup> + 2H<sub>2</sub>O"
									}
								],
								btns: [
									{
										text: "Перейти до розділу \"Основи\"",
										link: "3, 5, 6"
									},
									{
										text: "Перейти до розділу \"Сульфатна кислота\"",
										link: "7, 6, 9, 10"
									}
								]
							}
						}
					},
					{
						text: "Каталіз",
						tooltip: "Каталіз - умова виникнення хімічної реакції між порошками магнію та йоду",
						content: {
							urlVideo: "video/video7.mp4",
							popup: {
								formulas: [
									{
										text: "Mg + I<sub>2</sub> <text-line-width>H<sub>2</sub>O</text-line-width> MgI<sub>2</sub>"
									},
									{
										type: "parts",
										text: [
											[
												"<indexes>I<top-index>0</top-index><bottom-index>2</bottom-index></indexes> + 2<e>e</e> = 2I<sup>-</sup>",
												"Mg<sup>0</sup> - 2<e>e</e> = Mg<sup>+2</sup>"
											],
											"2",
											[
												"1 - <span class=\"yellow\">окисник</span>",
												"1 - <span class=\"blue\">відновник</span>"
											]
										]
									}
								],
								btns: [
									{
										text: "Перейти до розділу \"Метали\"",
										link: "6"
									},
									{
										text: "Перейти до розділу \"Сьома група\"",
										link: "7"
									}
								]
							}
						}
					},
					{
						text: "Каталіз",
						tooltip: "Каталіз - умова перебігу хімічної реакції гідроген пероксиду",
						content: {
							urlVideo: "video/video8.mp4",
							popup: {
								formulas: [
									{
										text: "2H<sub>2</sub>O<sub>2</sub> <text-line-width>MnO<sub>2</sub></text-line-width> 2H<sub>2</sub>O + O<sub>2</sub>↑"
									}
								],
								btns: [
									{
										text: "Перейти до розділу \"Добування кисню\"",
										link: "2"
									}
								]
							}
						}
					}
				]
			},
			{
				type: "spoller",
				openerText: "Ознаки, що супроводжують хімічні реакції",
				items: [
					{
						text: "Випадання осаду",
						tooltip: "Взаємодія барій нітрату з сульфатною кислотою",
						content: {
							urlVideo: "video/video9.mp4",
							popup: {
								formulas: [
									{
										text: "Ba(NO<sub>3</sub>)<sub>2</sub> + H<sub>2</sub>SO<sub>4</sub> = BaSO<sub>4</sub>↓ + H<sub>2</sub>O"
									},
									{
										text: "Ba<sup>2+</sup> + <indexes>SO<top-index>2-</top-index><bottom-index>4</bottom-index></indexes> = BaSO<sub>4</sub>↓"
									}
								],
								btns: [
									{
										text: "Перейти до розділу \"Сульфатна кислота\"",
										link: "7, 6, 9, 10"
									}
								]
							}
						}
					},
					{
						text: "Зміна забарвлення",
						tooltip: "Реакція калій роданіду з ферум (ІІІ) хлоридом",
						content: {
							urlVideo: "video/video10.mp4",
							popup: {
								formulas: [
									{
										text: "FeCl<sub>3</sub> + 3KCNS = Fe(CNS)<sub>3</sub> + 3KCl"
									},
									{
										text: "Fe<sup>3+</sup> + 3CNS<sup>-</sup> = Fe(CNS)<sub>3</sub>"
									}
								]
							}
						}
					},
					{
						text: "Виділення газу",
						tooltip: "Взаємодія натрій карбонату з сульфатною кислотою",
						content: {
							urlVideo: "video/video11.mp4",
							popup: {
								formulas: [
									{
										text: "Na<sub>2</sub>CO<sub>3</sub> + H<sub>2</sub>SO<sub>4</sub> = Na<sub>2</sub>SO<sub>4</sub> + H<sub>2</sub>O + CO<sub>2</sub>↑"
									}
								]
							}
						}
					},
					{
						text: "Виділення тепла і світла",
						tooltip: "Горіння магнію на повітрі",
						content: {
							urlVideo: "video/video12.mp4",
							popup: {
								formulas: [
									{
										text: "2Mg + O<sub>2</sub> = 2MgO <span class=\"yellow\">+ Q</span>"
									}
								],
								btns: [
									{
										text: "Перейти до розділу \"Метали\"",
										link: "6"
									}
								]
							}
						}
					}
				]
			}
		]
	},
	2: {
		text: "2",
		label: "Кисень і водень",
		items: [
			{
				type: "spoller",
				openerText: "Добування кисню",
				items: [
					{
						text: "1 спосіб",
						tooltip: "Термічний розклад калій перманганату",
						content: {
							urlVideo: "video/video13.mp4",
							popup: {
								formulas: [
									{
										text: "2KMnO<sub>4</sub> <text-line>=<text-line-text>t<sup>0</sup></text-line-text></text-line> K<sub>2</sub>MnO<sub>4</sub> + MnO<sub>2</sub> + O<sub>2</sub>↑"
									}
								]
							}
						}
					},
					{
						text: "2 спосіб",
						tooltip: "Каталітичний розклад гідроген пероксиду",
						content: {
							urlVideo: "video/video14.mp4",
							popup: {
								formulas: [
									{
										text: "2H<sub>2</sub>O<sub>2</sub> <text-line-width>MnO<sub>2</sub></text-line-width> 2H<sub>2</sub>O + O<sub>2</sub>↑"
									}
								],
								btns: [
									{
										text: "Перейти до розділу \"Умови виникнення та перебігу хімічних реакцій\"",
										link: "1, 7, 8"
									}
								]
							}
						}
					}
				]
			},
			{
				type: "spoller",
				openerText: "Хімічні властивості кисню",
				items: [
					{
						text: "Дослід 1",
						tooltip: "Горіння заліза в атмосфері кисню",
						content: {
							urlVideo: "video/video15.mp4",
							popup: {
								formulas: [
									{
										text: "3Fe + 2O<sub>2</sub> = <bottom-label-left><span>Fe<sub>3</sub>O<sub>4</sub></span><bottom-label-left-text>(FeO*Fe<sub>2</sub>O<sub>3</sub>)</bottom-label-left-text></bottom-label-left>"
									}
								],
								btns: [
									{
										text: "Перейти до розділу \"Метали\"",
										link: "6"
									}
								]
							}
						}
					},
					{
						text: "Дослід 2",
						tooltip: "Горіння сірки в атмосфері кисню",
						content: {
							urlVideo: "video/video16.mp4",
							popup: {
								formulas: [
									{
										text: "S + O<sub>2</sub> = SO<sub>2</sub>"
									}
								]
							}
						}
					},
					{
						text: "Дослід 3",
						tooltip: "Горіння фосфору в атмосфері кисню",
						content: {
							urlVideo: "video/video17.mp4",
							popup: {
								formulas: [
									{
										text: "4P + 5O<sub>2</sub> = 2P<sub>2</sub>O<sub>5</sub>"
									}
								]
							}
						}
					}
				]
			},
			{
				text: "Добування водню",
				tooltip: "Добування водню",
				content: {
					urlVideo: "video/video18.mp4",
					popup: {
						formulas: [
							{
								text: "Zn + 2HCl = ZnCl<sub>2</sub> + H<sub>2</sub>↑"
							},
							{
								text: "2H<sub>2</sub> + O<sub>2</sub> = 2H<sub>2</sub>O"
							}
						]
					}
				}
			}
		]
	},
	3: {
		text: "3",
		label: "Найважливіші класи неорганічних сполук",
		items: [
			{
				text: "Нерозчинних основ",
				tooltip: "Взаємодія купрум (ІІ) гідроксиду з сульфатною кислотою та його термічной розклад",
				content: {
					urlVideo: "video/video26.mp4",
					popup: {
						formulas: [
							{
								text: "CuSO<sub>4</sub> + 2NaOH = Cu(OH)<sub>2</sub>↓ + Na<sub>2</sub>SO<sub>4</sub>"
							},
							{
								text: "Cu<sup>2+</sup> + 2OH<sup>-</sup> → Cu(OH)<sub>2</sub>↓"
							},
							{
								text: "Cu(OH)<sub>2</sub> <text-line>→<text-line-text>t<sup>0</sup></text-line-text></text-line> CuO + H<sub>2</sub>O"
							},
							{
								text: "Cu(OH)<sub>2</sub> H<sub>2</sub>SO<sub>4</sub> = CuSO<sub>4</sub> + 2H<sub>2</sub>O"
							},
							{
								text: "Cu(OH)<sub>2</sub> + 2H<sup>+</sup> → Cu<sup>2+</sup> + 2H<sub>2</sub>O"
							}
						],
						btns: [
							{
								text: "Перейти до розділу \"Умови виникнення та перебігу хімічних реакцій\"",
								link: "1, 7, 8"
							},
							{
								text: "Перейти до розділу \"Сульфатна кислота\"",
								link: "7, 6, 9, 10"
							}
						]
					}
				}
			},
			{
				type: "spoller",
				openerText: "Оксиди",
				items: [
					{
						text: "Основні",
						tooltip: "Взаємодія оксидів купурму та феруму з кислотами",
						content: [
							{
								urlVideo: "video/video19.mp4",
								popup: {
									formulas: [
										{
											text: "CuO + H<sub>2</sub>SO<sub>4</sub> = CuSO<sub>4</sub> + H<sub>2</sub>O"
										},
										{
											text: "CuO + 2H<sup>+</sup> = Cu<sup>2+</sup> + H<sub>2</sub>O"
										}
									]
								}
							},
							{
								urlVideo: "video/video20.mp4",
								popup: {
									formulas: [
										{
											text: "Fe<sub>2</sub>O<sub>3</sub> + 6HCl = 2FeCl<sub>3</sub> + 3H<sub>2</sub>O"
										},
										{
											text: "Fe<sub>2</sub>O<sub>3</sub> + 6H<sup>+</sup> = 2Fe<sup>3+</sup> + 3H<sub>2</sub>O"
										}
									]
								}
							}
						]
					},
					{
						text: "Кислотні",
						tooltip: "Взаємодія з водою оксидів сульфуру та фосфору. Див. також реакції добування вищезгаданих оксидів в розділі \"Кисень і водень\", \"Дослід 1\", \"Дослід 2\"",
						content: {
							urlVideo: "video/video21.mp4",
							popup: {
								formulas: [
									{
										text: "SO<sub>2</sub> + H<sub>2</sub>O = H<sub>2</sub>SO<sub>3</sub>"
									},
									{
										text: "P<sub>2</sub>O<sub>5</sub> + 3H<sub>2</sub>O = 2H<sub>3</sub>PO<sub>4</sub>"
									}
								]
							}
						}
					}
				]
			},
			{
				type: "spoller",
				openerText: "Основи",
				items: [
					{
						type: "plus",
						items: [
							{
								text: "Добування лугів",
								tooltip: "Взаємодія натрій з водою",
								content: {
									urlVideo: "video/video22.mp4",
									popup: {
										formulas: [
											{
												text: "2Na + 2H<sub>2</sub>O = 2NaOH + H<sub>2</sub>↑"
											}
										]
									}
								}
							},
							{
								tooltip: "Електроліз розчину натрій хлориду",
								content: {
									urlVideo: "video/video23.mp4",
									popup: {
										formulas: [
											{
												text: "2NaCl + 2H<sub>2</sub>O = 2NaOH + H<sub>2</sub>↑ + Cl<sub>2</sub>↑"
											},
											{
												text: "катод ( - ) 2H<sub>2</sub>O + 2<e>e</e> = H<sub>2</sub>↑ + 2OH<sup>-</sup>"
											},
											{
												text: "анод ( + ) 2Cl<sup>-</sup> - 2<e>e</e> = Cl<sub>2</sub>↑"
											}
										],
										btns: [
											{
												text: "Перейти до розділу \"Сьома група\"",
												link: "7"
											}
										]
									}
								}
							}
						]
					},
					{
						text: "Нерозчинних основ",
						tooltip: "Добування ферум (ІІІ) гудрокссду. Див. також реакцію добування купрум гідроксиду - \"Властивості нерозчинних основ\"",
						content: {
							urlVideo: "video/video24.mp4",
							popup: {
								formulas: [
									{
										text: "FeCl<sub>3</sub> + 3KOH = Fe(OH)<sub>3</sub>↓ + 3KCl"
									},
									{
										text: "Fe<sup>3+</sup> + 3OH<sup>-</sup> = Fe(OH)<sub>3</sub>↓"
									}
								]
							}
						}
					},
					{
						text: "Властивості лугів",
						tooltip: "Властивості нейтралізації кислоти основою",
						content: {
							urlVideo: "video/video25.mp4",
							popup: {
								formulas: [
									{
										text: "2KOH + H<sub>2</sub>SO<sub>4</sub> = K<sub>2</sub>SO<sub>4</sub> + 2H<sub>2</sub>O"
									},
									{
										text: "2OH<sup>-</sup> + 2H<sup>+</sup> = 2H<sub>2</sub>O"
									}
								],
								btns: [
									{
										text: "Перейти до розділу \"Сульфатна кислота\"",
										link: "7, 6, 9, 10"
									}
								]
							}
						}
					},
					{
						text: "Нерозчинних основ",
						tooltip: "Взаємодія купрум (ІІ) гідроксиду з сульфатною кислотою та його термічной розклад",
						content: {
							urlVideo: "video/video26.mp4",
							popup: {
								formulas: [
									{
										text: "CuSO<sub>4</sub> + 2NaOH = Cu(OH)<sub>2</sub>↓ + Na<sub>2</sub>SO<sub>4</sub>"
									},
									{
										text: "Cu<sup>2+</sup> + 2OH<sup>-</sup> → Cu(OH)<sub>2</sub>↓"
									},
									{
										text: "Cu(OH)<sub>2</sub> <text-line>→<text-line-text>t<sup>0</sup></text-line-text></text-line> CuO + H<sub>2</sub>O"
									},
									{
										text: "Cu(OH)<sub>2</sub> H<sub>2</sub>SO<sub>4</sub> = CuSO<sub>4</sub> + 2H<sub>2</sub>O"
									},
									{
										text: "Cu(OH)<sub>2</sub> + 2H<sup>+</sup> → Cu<sup>2+</sup> + 2H<sub>2</sub>O"
									}
								],
								btns: [
									{
										text: "Перейти до розділу \"Умови виникнення та перебігу хімічних реакцій\"",
										link: "1, 7, 8"
									},
									{
										text: "Перейти до розділу \"Сульфатна кислота\"",
										link: "7, 6, 9, 10"
									}
								]
							}
						}
					},
					{
						text: "Амфотерність",
						tooltip: "Добування алюміній гідроксиду та виявлення його амфотерних властивостей взаємодією з кислотою та основою",
						content: {
							urlVideo: "video/video27.mp4",
							popup: {
								formulas: [
									{
										text: "Al(NO<sub>3</sub>)<sub>3</sub> + 3NaOH = Al(OH)<sub>3</sub>↓ + 3NaNO<sub>3</sub>"
									},
									{
										text: "Al<sup>3+</sup> + 3OH<sup>-</sup> → Al(OH)<sub>3</sub>↓"
									},
									{
										text: "2Al(OH)<sub>3</sub> + 3H<sub>2</sub>SO<sub>4</sub> = Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + 6H<sub>2</sub>O"
									},
									{
										text: "Al(OH)<sub>3</sub> + 3H<sup>+</sup> → Al<sup>3+</sup> + 3H<sub>2</sub>O"
									},
									{
										text: "Al(OH)<sub>3</sub> + NaOH = Na[Al(OH)<sub>4</sub>]"
									},
									{
										text: "Al(OH)<sub>3</sub> + OH<sup>-</sup> → [Al(OH)<sub>4</sub>]<sup>-</sup>"
									}
								]
							}
						}
					}
				]
			},
			{
				type: "spoller",
				openerText: "Кислоти",
				items: [
					{
						type: "spoller",
						openerText: "Властивості",
						tooltip: "Взаємодія кислот з металами, основними оксидами, основами та солями",
						items: [
							{
								text: "З металами",
								tooltip: "Взаємодія цинку з хлоридною кислотою",
								content: {
									urlVideo: "video/video18.mp4",
									popup: {
										formulas: [
											{
												text: "Zn + 2HCl = ZnCl<sub>2</sub> + H<sub>2</sub>↑"
											},
											{
												text: "Zn + 2H<sup>+</sup> → Zn<sup>2+</sup> + H<sub>2</sub>↑"
											}
										]
									}
								}
							},
							{
								text: "З основними оксидами",
								tooltip: "Взаємодія кислот з оксидами Купруму та Феруму",
								content: [
									{
										urlVideo: "video/video19.mp4",
										popup: {
											formulas: [
												{
													text: "CuO + H<sub>2</sub>SO<sub>4</sub> = CuSO<sub>4</sub> + H<sub>2</sub>O"
												},
												{
													text: "CuO + 2H<sup>+</sup> → Cu<sup>2+</sup> + H<sub>2</sub>O"
												}
											]
										}
									},
									{
										urlVideo: "video/video20.mp4",
										popup: {
											formulas: [
												{
													text: "Fe<sub>2</sub>O<sub>3</sub> + 6HCl = 2FeCl<sub>3</sub> + 3H<sub>2</sub>O"
												},
												{
													text: "Fe<sub>2</sub>O<sub>3</sub> + 6H<sup>+</sup> = 2Fe<sup>3+</sup> + 3H<sub>2</sub>O"
												}
											]
										}
									}
								]
							},
							{
								text: "З основами",
								tooltip: "Нейтралізація калій гідроксиду сульфатною кислотою. Див. також розділ \"Основи\" - \"Властивості нерозчинних основ\"",
								content: {
									urlVideo: "video/video25.mp4",
									popup: {
										formulas: [
											{
												text: "2KOH + H<sub>2</sub>SO<sub>4</sub> = K<sub>2</sub>SO<sub>4</sub> + 2H<sub>2</sub>O"
											},
											{
												text: "2OH<sup>-</sup> + 2H<sup>+</sup> = 2H<sub>2</sub>O"
											}
										],
										btns: [
											{
												text: "Перейти до розділу \"Сульфатна кислота\"",
												link: "7, 6, 9, 10"
											}
										]
									}
								}
							},
							{
								text: "З солями",
								tooltip: "Взаємодія сульфатної кислоти з розчином натрій карбонату",
								content: {
									urlVideo: "video/video11.mp4",
									popup: {
										formulas: [
											{
												text: "Na<sub>2</sub>CO<sub>3</sub> + H<sub>2</sub>SO<sub>4</sub> = Na<sub>2</sub>SO<sub>4</sub> + H<sub>2</sub>O + CO<sub>2</sub>↑"
											},
											{
												text: "<indexes>CO<top-index>2-</top-index><bottom-index>3</bottom-index></indexes> + 2H<sup>+</sup> = CO<sub>2</sub> + H<sub>2</sub>O↑"
											}
										],
										btns: [
											{
												text: "Перейти до розділу \"Сульфатна кислота\"",
												link: "7, 6, 9, 10"
											}
										]
									}
								}
							}
						]
					}
				]
			},
			{
				type: "spoller",
				openerText: "Солі",
				items: [
					{
						text: "З металами",
						tooltip: "Взаємодія розчину купрум (ІІ) сульфату з цинком",
						content: {
							urlVideo: "video/video28.mp4",
							popup: {
								formulas: [
									{
										text: "CuSO<sub>4</sub> + Zn = ZnSO<sub>4</sub> + Cu"
									},
									{
										text: "Cu<sup>2+</sup> + Zn = Zn<sup>2+</sup> + Cu"
									}
								]
							}
						}
					},
					{
						text: "З кислотами",
						tooltip: "Взаємодія кальцій карбонату з хлоридною кислотою",
						content: {
							urlVideo: "video/video29.mp4",
							popup: {
								formulas: [
									{
										text: "CaCO<sub>3</sub> + 2HCl = CaCl<sub>2</sub> + H<sub>2</sub>O + CO<sub>2</sub>↑"
									},
									{
										text: "CaCO<sub>3</sub> + 2H<sup>+</sup> = Ca<sup>2+</sup> + H<sub>2</sub>O + CO<sub>2</sub>↑"
									}
								]
							}
						}
					},
					{
						text: "З основами",
						tooltip: "Взаємодія ферум (ІІІ) хлориду з калій гідроксидом",
						content: {
							urlVideo: "video/video24.mp4",
							popup: {
								formulas: [
									{
										text: "FeCl<sub>3</sub> + 3KOH = Fe(OH)<sub>3</sub>↓ + 3KCl"
									},
									{
										text: "Fe<sup>3+</sup> + 3OH<sup>-</sup> = Fe(OH)<sub>3</sub>↓"
									}
								]
							}
						}
					},
					{
						text: "З солями",
						tooltip: "Взаємодія плюмбум (ІІ) нітрату з калій йодидом",
						content: {
							urlVideo: "video/video3.mp4",
							popup: {
								formulas: [
									{
										text: "Pb(NO<sub>3</sub>)<sub>2</sub> + 2KI = PbI<sub>2</sub>↓ + 2KNO<sub>3</sub>"
									}
								],
								btns: [
									{
										text: "Перейти до розділу \"Способи розділення суміші\"",
										link: "1"
									}
								]
							}
						}
					}
				]
			}
		]
	},
	4: {
		text: "4",
		label: "Окисно-відновні реакції",
		items: [
			{
				text: "Міжмолекулярні",
				tooltip: "Взаємодія калій хромату та біхромату з ферум (ІІ) сульфатом",
				content: {
					urlVideo: "video/video30.mp4",
					popup: {
						formulas: [
							{
								text: "6FeSO<sub>4</sub> + 2K<sub>2</sub>CrO<sub>4</sub> + 8H<sub>2</sub>SO<sub>4</sub> = 3Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + 2K<sub>2</sub>SO<sub>4</sub> + Cr<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + 8H<sub>2</sub>O"
							},
							{
								type: "parts",
								text: [
									[
										"2Cr<sup>+6</sup> + 6<e>e</e> = 2Cr<sup>+3</sup>",
										"2Fe<sup>+2</sup> - 2<e>e</e> = 2Fe<sup>+3</sup>"
									],
									"6",
									[
										"1 - <span class=\"yellow\">окисник</span>",
										"5 - <span class=\"blue\">відновник</span>"
									]
								]
							},
							{
								text: "6FeSO<sub>4</sub> + K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> + 7H<sub>2</sub>SO<sub>4</sub> = 3Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + K<sub>2</sub>SO<sub>4</sub> + Cr<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + 7H<sub>2</sub>O"
							},
							{
								type: "parts",
								text: [
									[
										"2Cr<sup>+6</sup> + 6<e>e</e> = 2Cr<sup>+3</sup>",
										"2Fe<sup>+2</sup> - 2<e>e</e> = 2Fe<sup>+3</sup>"
									],
									"6",
									[
										"1 - <span class=\"yellow\">окисник</span>",
										"5 - <span class=\"blue\">відновник</span>"
									]
								]
							}
						]
					}
				}
			},
			{
				text: "Внутрішньомолекулярні",
				tooltip: "Розклад амоній біхромату",
				content: {
					urlVideo: "video/video31.mp4",
					popup: {
						formulas: [
							{
								text: "(NH<sub>4</sub>)<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> <text-line>→<text-line-text>t<sup>0</sup></text-line-text></text-line> N<sub>2</sub>↑ + Cr<sub>2</sub>O<sub>3</sub> + 4H<sub>2</sub>O↑"
							},
							{
								type: "parts",
								text: [
									[
										"2Cr<sup>+6</sup> + 6<e>e</e> = 2Cr<sup>+3</sup>",
										"2N<sup>-3</sup> - 6<e>e</e> = <indexes>N<top-index>0</top-index><bottom-index>2</bottom-index></indexes>"
									],
									"6",
									[
										"1 - <span class=\"yellow\">окисник</span>",
										"5 - <span class=\"blue\">відновник</span>"
									]
								]
							}
						]
					}
				}
			},
			{
				text: "Вплив середовища",
				tooltip: "Взаємодія калій перманганату з калій нітритом в кислому, нейтральному та лужному середовищах",
				content: {
					urlVideo: "video/video32.mp4",
					popup: {
						formulas: [
							{
								text: "2KMnO<sub>4</sub> + 5KNO<sub>2</sub> + 3H<sub>2</sub>SO<sub>4</sub> = K<sub>2</sub>SO<sub>4</sub> + 2MnSO<sub>4</sub> + 5KNO<sub>3</sub> + 3H<sub>2</sub>O"
							},
							{
								type: "parts",
								text: [
									[
										"Mn<sup>+7</sup> + 5<e>e</e> = Mn<sup>+2</sup>",
										"N<sup>+3</sup> - 2<e>e</e> = N<sup>+5</sup>"
									],
									"10",
									[
										"2 - <span class=\"yellow\">окисник</span>",
										"5 - <span class=\"blue\">відновник</span>"
									]
								]
							},
							{
								text: "2KMnO<sub>4</sub> + 3KNO<sub>2</sub> + H<sub>2</sub>O = 2MnO<sub>2</sub> + 3KNO<sub>3</sub> + 2KOH"
							},
							{
								type: "parts",
								text: [
									[
										"Mn<sup>+7</sup> + 3<e>e</e> = Mn<sup>+4</sup>",
										"N<sup>+3</sup> - 2<e>e</e> = N<sup>+5</sup>"
									],
									"6",
									[
										"2 - <span class=\"yellow\">окисник</span>",
										"3 - <span class=\"blue\">відновник</span>"
									]
								]
							},
							{
								text: "2KMnO<sub>4</sub> + KNO<sub>2</sub> + 2KOH = 2K<sub>2</sub>MnO<sub>4</sub> + KNO<sub>3</sub> + H<sub>2</sub>O"
							},
							{
								type: "parts",
								text: [
									[
										"Mn<sup>+7</sup> + <e>e</e> = Mn<sup>+6</sup>",
										"N<sup>+3</sup> - 2<e>e</e> = N<sup>+5</sup>"
									],
									"2",
									[
										"2 - <span class=\"yellow\">окисник</span>",
										"1 - <span class=\"blue\">відновник</span>"
									]
								]
							}
						]
					}
				}
			}
		]
	},
	5: {
		text: "5",
		label: "Розчини",
		items: [
			{
				text: "Кристалогідрати",
				tooltip: "Зневоднення мідного купоросу та розчинення безводної солі у воді",
				content: {
					urlVideo: "video/video33.mp4",
					popup: {
						formulas: [
							{
								text: "CuSO<sub>4</sub> * 5H<sub>2</sub>O <text-line>→<text-line-text>t<sup>0</sup></text-line-text></text-line> CuSO<sub>4</sub> + 5H<sub>2</sub>O↑"
							},
							{
								text: "CuSO<sub>4</sub> + 5H<sub>2</sub>O = CuSO<sub>4</sub> * 5H<sub>2</sub>O"
							},
							{
								text: "CuSO<sub>4</sub> * 5H<sub>2</sub>O <text-line-width>розчинення</text-line-width> CuSO<sub>4</sub> + 5H<sub>2</sub>O"
							},
							{
								text: "CuSO<sub>4</sub> ⇄ Cu<sup>2+</sup> + <indexes>SO<top-index>2-</top-index><bottom-index>4</bottom-index></indexes>"
							},
							{
								text: "Cu<sup>2+</sup> + 4H<sub>2</sub>O → [Cu(H<sub>2</sub>O)<sub>4</sub>]<sup>2+</sup>"
							}
						]
					}
				}
			},
			{
				text: "Електропровідність",
				tooltip: "Дослідження провідності розчинів електролітів та неелектролітів",
				content: [
					{
						urlVideo: "video/video34.mp4"
					},
					{
						urlVideo: "video/video35.mp4"
					}
				]
			},
			{
				text: "Енергетичний ефект",
				tooltip: "Зміна температури при приготуванні розчинів сульфатної кислоти та амоній нітрату",
				content: {
					urlVideo: "video/video36.mp4"
				}
			},
			{
				text: "Гідроліз",
				tooltip: "Зміна забарвлення універсального індикаторного паперу у розчинах алюміній хлориду та калій карбонату. Взаємодія алюміній хлориду з калій карбонатом, повний гідроліз утвореної солі.",
				content: {
					urlVideo: "video/video37.mp4",
					popup: {
						formulas: [
							{
								text: "AlCl<sub>3</sub> + H<sub>2</sub>O ⇄ Al(OH)Cl<sub>2</sub> + HCl"
							},
							{
								text: "Al<sup>3+</sup> + H<sub>2</sub>O ⇄ Al(OH)<sup>2+</sup> + H<sup>+</sup>"
							},
							{
								text: "K<sub>2</sub>CO<sub>3</sub> + H<sub>2</sub>O ⇄ KHCO<sub>3</sub> + KOH"
							},
							{
								text: "<indexes>CO<top-index>2-</top-index><bottom-index>3</bottom-index></indexes> + H<sub>2</sub>O ⇄ <indexes>HCO<top-index>-</top-index><bottom-index>3</bottom-index></indexes> + OH<sup>-</sup>"
							},
							{
								text: "2K<sub>2</sub>CO<sub>3</sub> + 2AlCl<sub>3</sub> → Al<sub>2</sub>(CO<sub>3</sub>)<sub>3</sub> + 6KCl"
							},
							{
								text: "Al<sub>2</sub>(CO<sub>3</sub>)<sub>3</sub> + 6H<sub>2</sub>O → 2Al(OH)<sub>3</sub>↓ + 3H<sub>2</sub>O + 3CO<sub>2</sub>↑"
							},
							{
								text: "2K<sub>2</sub>CO<sub>3</sub> + 2AlCl<sub>3</sub> + 6H<sub>2</sub>O = 2Al(OH)<sub>3</sub>↓ + 3H<sub>2</sub>O + 3CO<sub>2</sub>↑"
							},
							{
								text: "<indexes>3CO<top-index>2-</top-index><bottom-index>3</bottom-index></indexes> + 2Al<sup>3+</sup> + 6H<sub>2</sub>O → 2Al(OH)<sub>3</sub>↓ + 3H<sub>2</sub>O + 3CO<sub>2</sub>↑"
							}
						]
					}
				}
			}
		]
	},
	6: {
		text: "6",
		label: "Метали",
		items: [
			{
				text: "Натрій",
				tooltip: "Взаємодія натрій з водою",
				content: {
					urlVideo: "video/video22.mp4",
					popup: {
						formulas: [
							{
								text: "2Na + 2H<sub>2</sub>O = 2NaOH + H<sub>2</sub>↑"
							}
						]
					}
				}
			},
			{
				type: "plus",
				items: [
					{
						text: "Магній",
						tooltip: "Взаємодія магнію з йодом",
						content: {
							urlVideo: "video/video7.mp4",
							popup: {
								formulas: [
									{
										text: "Mg + I<sub>2</sub> <text-line-width>H<sub>2</sub>O</text-line-width> MgI<sub>2</sub>"
									},
									{
										type: "parts",
										text: [
											[
												"<indexes>I<top-index>0</top-index><bottom-index>2</bottom-index></indexes> + 2<e>e</e> = 2I<sup>-</sup>",
												"Mg<sup>0</sup> - 2<e>e</e> = Mg<sup>+2</sup>"
											],
											"2",
											[
												"1 - <span class=\"yellow\">окисник</span>",
												"1 - <span class=\"blue\">відновник</span>"
											]
										]
									}
								],
								btns: [
									{
										text: "Перейти до розділу \"Умови виникнення та перебігу хімічних реакцій\"",
										link: "1, 7, 8"
									},
									{
										text: "Перейти до розділу \"Сьома група\"",
										link: "7"
									}
								]
							}
						}
					},
					{
						tooltip: "Горіння магнію",
						content: {
							urlVideo: "video/video5.mp4",
							popup: {
								formulas: [
									{
										text: "2Mg + O<sub>2</sub> = 2MgO <span class=\"yellow\">+ Q</span>"
									}
								],
								btns: [
									{
										text: "Перейти до розділу \"Умови виникнення та перебігу хімічних реакцій\"",
										link: "1, 7, 8"
									},
									{
										text: "Перейти до розділу \"Ознаки, що супроводжують хімічні реакції\"",
										link: "1, 12, 13"
									}
								]
							}
						}
					}
				]
			},
			{
				type: "plus",
				items: [
					{
						text: "Алюміній",
						tooltip: "Взаємодія алюмінію з кислотою та лугом",
						content: {
							urlVideo: "video/video38.mp4",
							popup: {
								formulas: [
									{
										text: "2Al + 3HCl = AlCl<sub>3</sub> + 3H<sub>2</sub>↑"
									},
									{
										text: "2Al + 6H<sup>+</sup> → 2Al<sup>3+</sup> + 3H<sub>2</sub>↑"
									},
									{
										text: "2Al + 2NaOH + 2H<sub>2</sub>O = 2NaAlO<sub>2</sub> + 3H<sub>2</sub>↑"
									},
									{
										text: "2Al + 2OH<sup>-</sup> → <indexes>2AlO<top-index>-</top-index><bottom-index>2</bottom-index></indexes> + 3H<sub>2</sub>↑"
									},
									{
										text: "2Al + 2NaOH + 6H<sub>2</sub>O = 2Na[Al(OH)<sub>4</sub>] + 3H<sub>2</sub>↑"
									},
									{
										text: "2Al + 2OH<sup>-</sup> + 6H<sub>2</sub>O → 2[Al(OH)<sub>4</sub>]<sup>-</sup> + 3H<sub>2</sub>↑"
									},
									{
										type: "parts",
										text: [
											[
												"2H<sup>+</sup> + 2<e>e</e> = <indexes>H<top-index>0</top-index><bottom-index>2</bottom-index></indexes>",
												"Al<sup>0</sup> - 3<e>e</e> = Al<sup>+3</sup>"
											],
											"6",
											[
												"3 - <span class=\"yellow\">окисник</span>",
												"2 - <span class=\"blue\">відновник</span>"
											]
										]
									}
								]
							}
						}
					},
					{
						tooltip: "Алюмотермія - реакція між порошками алюмінію та ферум (ІІІ) оксиду",
						content: {
							urlVideo: "video/video39.mp4",
							popup: {
								formulas: [
									{
										text: "Fe<sub>2</sub>O<sub>3</sub> + Al = Al<sub>2</sub>O<sub>3</sub> + Fe"
									}
								]
							}
						}
					}
				]
			},
			{
				type: "plus",
				items: [
					{
						text: "Залізо",
						tooltip: "Взаємодія заліза з сіркою",
						content: {
							urlVideo: "video/video40.mp4",
							popup: {
								formulas: [
									{
										text: "Fe + S = FeS"
									}
								],
								btns: [
									{
										text: "Перейти до розділу \"Шоста група\"",
										link: "7, 6, 7"
									}
								]
							}
						}
					},
					{
						tooltip: "Горіння заліза в атмосфері кисню",
						content: {
							urlVideo: "video/video15.mp4",
							popup: {
								formulas: [
									{
										text: "3Fe + 2O<sub>2</sub> = <bottom-label-left><span>Fe<sub>3</sub>O<sub>4</sub></span><bottom-label-left-text>(FeO*Fe<sub>2</sub>O<sub>3</sub>)</bottom-label-left-text></bottom-label-left>"
									}
								],
								btns: [
									{
										text: "Перейти до розділу \"Хімічні властивості кисню\"",
										link: "2, 4, 5"
									}
								]
							}
						}
					}
				]
			},
			{
				text: "Йони феруму 2+",
				tooltip: "Якісні реакції на йони ферум (ІІ)",
				content: {
					urlVideo: "video/video41.mp4",
					popup: {
						formulas: [
							{
								text: "FeSO<sub>4</sub> + 2NaOH = Fe(OH)<sub>2</sub>↓ + Na<sub>2</sub>SO<sub>4</sub>"
							},
							{
								text: "Fe<sup>2+</sup> + 2OH<sup>-</sup> = Fe(OH)<sub>2</sub>↓"
							},
							{
								text: "4Fe(OH)<sub>2</sub> + 2H<sub>2</sub>O + O<sub>2</sub> = 4Fe(OH)<sub>3</sub>"
							},
							{
								type: "parts",
								text: [
									[
										"Fe<sup>+2</sup> - <e>e</e> = Fe<sup>+3</sup>",
										"<indexes>O<top-index>0</top-index><bottom-index>2</bottom-index></indexes> + 4<e>e</e> = 2O<sup>-2</sup>"
									],
									"4",
									[
										"4 - <span class=\"yellow\">окисник</span>",
										"1 - <span class=\"blue\">відновник</span>"
									]
								]
							},
							{
								text: "3FeSO<sub>4</sub> + 2K<sub>3</sub>[Fe(CN)<sub>6</sub>] = Fe<sub>3</sub>[Fe(CN)<sub>6</sub>]<sub>2</sub> + 3K<sub>2</sub>SO<sub>4</sub>"
							}
						]
					}
				}
			},
			{
				text: "Йони феруму 3+",
				tooltip: "Якісні реакції на йони ферум (ІІІ)",
				content: {
					urlVideo: "video/video42.mp4",
					popup: {
						formulas: [
							{
								text: "FeCl<sub>3</sub> + 3NaOH = Fe(OH)<sub>3</sub>↓ + 3NaCl"
							},
							{
								text: "Fe<sup>3+</sup> + 3OH<sup>-</sup> = Fe(OH)<sub>3</sub>↓"
							},
							{
								text: "FeCl<sub>3</sub> + 3KCNS = Fe(CNS)<sub>3</sub> + 3KCl"
							},
							{
								text: "Fe<sup>3+</sup> + 3CNS<sup>-</sup> = Fe(CNS)<sub>3</sub>"
							},
							{
								text: "4FeCl<sub>3</sub> + 3K<sub>4</sub>[Fe(CN)<sub>6</sub>] = Fe<sub>4</sub>[Fe(CN)<sub>6</sub>]<sub>3</sub> + 12KCl"
							}
						]
					}
				}
			},
			{
				text: "Електроліз",
				tooltip: "Електроліз розчину купрум (ІІ) сульфату",
				content: {
					urlVideo: "video/video43.mp4",
					popup: {
						formulas: [
							{
								text: "2CuSO<sub>4</sub> + 2H<sub>2</sub>O = 2H<sub>2</sub>SO<sub>4</sub> + O<sub>2</sub> + 2Cu"
							},
							{
								text: "катод ( - ) Cu<sup>2+</sup> - 2<e>e</e> = Cu"
							},
							{
								text: "анод ( + ) 2H<sub>2</sub>O + 4<e>e</e> = O<sub>2</sub> + 4H<sup>+</sup>"
							}
						]
					}
				}
			},
			{
				type: "plus",
				items: [
					{
						text: "Мідь",
						tooltip: "Взаємодія міді з розчином меркурій (ІІ) хлориду",
						content: {
							urlVideo: "video/video44.mp4",
							popup: {
								formulas: [
									{
										text: "HgCl<sub>2</sub> + Cu = CuCl<sub>2</sub> + Hg"
									},
									{
										text: "Hg<sup>2+</sup> + Cu<sup>0</sup> = Cu<sup>2+</sup> + Hg<sup>0</sup>"
									}
								]
							}
						}
					},
					{
						tooltip: "Взаємодія міді з концентрованою сульфатною кислотою при нагріванні",
						content: {
							urlVideo: "video/video45.mp4",
							popup: {
								formulas: [
									{
										text: "Cu + <bottom-label><span>H<sub>2</sub>SO<sub>4</sub></span><bottom-label-text>(конц)</bottom-label-text></bottom-label> <text-line>→<text-line-text>t<sup>0</sup></text-line-text></text-line> CuSO<sub>4</sub> + SO<sub>2</sub>↑ + 2H<sub>2</sub>O"
									},
									{
										type: "parts",
										text: [
											[
												"Cu<sup>0</sup> - 2<e>e</e> = Cu<sup>+2</sup>",
												"S<sup>+6</sup> + 2<e>e</e> = S<sup>+4</sup>"
											],
											"2",
											[
												"1 - <span class=\"yellow\">окисник</span>",
												"1 - <span class=\"blue\">відновник</span>"
											]
										]
									}
								],
								btns: [
									{
										text: "Перейти до розділу \"Сульфатна кислота\"",
										link: "7, 6, 9, 10"
									}
								]
							}
						}
					}
				]
			}
		]
	},
	7: {
		text: "7",
		label: "Неметали",
		items: [
			{
				type: "spoller",
				openerText: "Сьома група",
				items: [
					{
						text: "Сублімація йоду",
						tooltip: "Перехід йоду з твердого стану у газоподібний при нагріванні та назад у твердий при оходженні - сублімація на стінках колби",
						content: {
							urlVideo: "video/video46.mp4"
						}
					},
					{
						text: "Взаємодія з магнієм",
						tooltip: "Реакція між йодом та магнієм",
						content: {
							urlVideo: "video/video7.mp4",
							popup: {
								formulas: [
									{
										text: "Mg + I<sub>2</sub> <text-line-width>H<sub>2</sub>O</text-line-width> MgI<sub>2</sub>"
									},
									{
										type: "parts",
										text: [
											[
												"<indexes>I<top-index>0</top-index><bottom-index>2</bottom-index></indexes> + 2<e>e</e> = 2I<sup>-</sup>",
												"Mg<sup>0</sup> - 2<e>e</e> = Mg<sup>+2</sup>"
											],
											"2",
											[
												"1 - <span class=\"yellow\">окисник</span>",
												"1 - <span class=\"blue\">відновник</span>"
											]
										]
									}
								],
								btns: [
									{
										text: "Перейти до розділу \"Метали\"",
										link: "6"
									},
									{
										text: "Перейти до розділу \"Умови виникнення та перебігу хімічних реакцій\"",
										link: "1, 7, 8"
									}
								]
							}
						}
					},
					{
						text: "Хлоридна кислота",
						tooltip: "Взаємодія аргентум нітрату з хлоридною кислотою",
						content: {
							urlVideo: "video/video47.mp4",
							popup: {
								formulas: [
									{
										text: "HCl + AgNO<sub>3</sub> = AgCl↓ + HNO<sub>3</sub>"
									},
									{
										text: "Cl<sup>-</sup> + Ag<sup>+</sup> = AgCl↓"
									}
								]
							}
						}
					},
					{
						text: "Добування хлору",
						tooltip: "Електроліз розчину натрій хлориду",
						content: {
							urlVideo: "video/video23.mp4",
							popup: {
								formulas: [
									{
										text: "2NaCl + 2H<sub>2</sub>O = 2NaOH + H<sub>2</sub>↑ + Cl<sub>2</sub>↑"
									},
									{
										text: "катод ( - ) 2H<sub>2</sub>O + 2<e>e</e> = H<sub>2</sub>↑ + 2OH<sup>-</sup>"
									},
									{
										text: "анод ( + ) 2Cl<sup>-</sup> - 2<e>e</e> = Cl<sub>2</sub>↑"
									}
								],
								btns: [
									{
										text: "Перейти до розділу \"Основи\"",
										link: "3, 5, 6"
									}
								]
							}
						}
					}
				]
			},
			{
				type: "spoller",
				openerText: "Шоста група",
				items: [
					{
						text: "Горіння сірки",
						tooltip: "Горіння сірки в кисні та взаємодія отриманого сірчистого газу з водою",
						content: {
							urlVideo: "video/video48.mp4",
							popup: {
								formulas: [
									{
										text: "S + O<sub>2</sub> = SO<sub>2</sub>"
									},
									{
										text: "SO<sub>2</sub> + H<sub>2</sub>O = H<sub>2</sub>SO<sub>3</sub>"
									}
								]
							}
						}
					},
					{
						text: "Взаємодія з залізом",
						tooltip: "Реакція між залізом та сіркою",
						content: {
							urlVideo: "video/video40.mp4",
							popup: {
								formulas: [
									{
										text: "Fe + S = FeS"
									}
								],
								btns: [
									{
										text: "Перейти до розділу \"Метали\"",
										link: "6"
									}
								]
							}
						}
					},
					{
						type: "spoller",
						openerText: "Сульфатна кислота",
						tooltip: "Властивості сульфатної кислоти",
						items: [
							{
								text: "Водовідбірні властивості",
								tooltip: "Обвуглення деревини концентрованою сульфатною кислотою",
								content: {
									urlVideo: "video/video49.mp4"
								}
							},
							{
								text: "Взаємодія з міддю",
								tooltip: "Взаємодія концентрованої сульфатної кислоти з міддю при нагріванні",
								content: {
									urlVideo: "video/video45.mp4",
									popup: {
										formulas: [
											{
												text: "Cu + <bottom-label><span>H<sub>2</sub>SO<sub>4</sub></span><bottom-label-text>(конц)</bottom-label-text></bottom-label> <text-line>→<text-line-text>t<sup>0</sup></text-line-text></text-line> CuSO<sub>4</sub> + SO<sub>2</sub>↑ + 2H<sub>2</sub>O"
											},
											{
												type: "parts",
												text: [
													[
														"Cu<sup>0</sup> - 2<e>e</e> = Cu<sup>+2</sup>",
														"S<sup>+6</sup> + 2<e>e</e> = S<sup>+4</sup>"
													],
													"2",
													[
														"1 - <span class=\"yellow\">окисник</span>",
														"1 - <span class=\"blue\">відновник</span>"
													]
												]
											}
										],
										btns: [
											{
												text: "Перейти до розділу \"Метали\"",
												link: "6"
											}
										]
									}
								}
							},
							{
								text: "З натрій карбонатом",
								tooltip: "Взаємодія сульфатної кислоти з натрій карбонатом",
								content: {
									urlVideo: "video/video11.mp4",
									popup: {
										formulas: [
											{
												text: "Na<sub>2</sub>CO<sub>3</sub> + H<sub>2</sub>SO<sub>4</sub> = Na<sub>2</sub>SO<sub>4</sub> + H<sub>2</sub>O + CO<sub>2</sub>↑"
											},
											{
												text: "<indexes>CO<top-index>2-</top-index><bottom-index>3</bottom-index></indexes> + 2H<sup>+</sup> = CO<sub>2</sub> + H<sub>2</sub>O↑"
											}
										],
										btns: [
											{
												text: "Перейти до розділу \"Властивості кислот\"",
												link: "3, 12, 14, 15"
											}
										]
									}
								}
							},
							{
								text: "З купрум гідроксидом",
								tooltip: "Взаємодія сульфатної кислоти з купрум (ІІ) гідроксидом",
								content: {
									urlVideo: "video/video6.mp4",
									popup: {
										formulas: [
											{
												text: "CuSO<sub>4</sub> + 2NaOH = Cu(OH)<sub>2</sub>↓ + Na<sub>2</sub>SO<sub>4</sub>"
											},
											{
												text: "Cu<sup>2+</sup> + 2OH<sup>-</sup> → Cu(OH)<sub>2</sub>↓"
											},
											{
												text: "Cu(OH)<sub>2</sub> + <text-line>→<text-line-text>t<sup>0</sup></text-line-text></text-line> + CuO + H<sub>2</sub>O"
											},
											{
												text: "Cu(OH)<sub>2</sub> + H<sub>2</sub>SO<sub>4</sub> = CuSO<sub>4</sub> + 2H<sub>2</sub>O"
											},
											{
												text: "Cu(OH)<sub>2</sub> + 2H<sup>+</sup> → Cu<sup>2+</sup> + 2H<sub>2</sub>O"
											}
										],
										btns: [
											{
												text: "Перейти до розділу \"Основи\"",
												link: "3, 5, 6"
											},
											{
												text: "Перейти до розділу \"Умови виникнення та перебігу хімічних реакцій\"",
												link: "1, 7, 8"
											}
										]
									}
								}
							},
							{
								text: "З лугом",
								tooltip: "Взаємодія сульфатної кислоти з калій гідроксидом",
								content: {
									urlVideo: "video/video25.mp4",
									popup: {
										formulas: [
											{
												text: "2KOH + H<sub>2</sub>SO<sub>4</sub> = K<sub>2</sub>SO<sub>4</sub> + 2H<sub>2</sub>O"
											},
											{
												text: "2OH<sup>-</sup> + 2H<sup>+</sup> = 2H<sub>2</sub>O"
											}
										],
										btns: [
											{
												text: "Перейти до розділу \"Основи\"",
												link: "3, 5, 6"
											},
											{
												text: "Перейти до розділу \"Кислоти\"",
												link: "3, 12, 14, 15"
											}
										]
									}
								}
							},
							{
								text: "Якісна реакція",
								tooltip: "Взаємодія сульфатної кислоти з барій нітратом",
								content: {
									urlVideo: "video/video9.mp4",
									popup: {
										formulas: [
											{
												text: "Ba(NO<sub>3</sub>)<sub>2</sub> + H<sub>2</sub>SO<sub>4</sub> = BaSO<sub>4</sub>↓ + H<sub>2</sub>O"
											},
											{
												text: "Ba<sup>2+</sup> + <indexes>SO<top-index>2-</top-index><bottom-index>4</bottom-index></indexes> = BaSO<sub>4</sub>↓"
											}
										],
										btns: [
											{
												text: "Перейти до розділу \"Ознаки, що супроводжують хімічні реакції\"",
												link: "1, 12, 13"
											}
										]
									}
								}
							},
							{
								text: "Розчинення у воді",
								tooltip: "Розігрівання розчину сульфатної кислоти при розведенні водою",
								content: {
									urlVideo: "video/video36.mp4"
								}
							}
						]
					},
					{
						text: "Сульфіди",
						tooltip: "Взаємодія натрій сульфіду з купрум (ІІ) сульфатом",
						content: {
							urlVideo: "video/video50.mp4",
							popup: {
								formulas: [
									{
										text: "CuSO<sub>4</sub> + Na<sub>2</sub>S = CuS + Na<sub>2</sub>SO<sub>4</sub>"
									},
									{
										text: "Cu<sup>2+</sup> + S<sup>2-</sup> = CuS↓"
									}
								]
							}
						}
					}
				]
			},
			{
				type: "spoller",
				openerText: "П'ята група",
				items: [
					{
						text: "Горіння фосфору",
						tooltip: "Горіння фосфору в кисні та взаємодія отриманого оксиду з водою",
						content: {
							urlVideo: "video/video17.mp4",
							popup: {
								formulas: [
									{
										text: "4P + 5O<sub>2</sub> = 2P<sub>2</sub>O<sub>5</sub>"
									},
									{
										text: "P<sub>2</sub>O<sub>5</sub> + 3H<sub>2</sub>O = 2H<sub>3</sub>PO<sub>4</sub>"
									}
								]
							}
						}
					},
					{
						text: "Добування аміаку",
						tooltip: "Добування аміаку та розчиненя його у воді",
						content: {
							urlVideo: "video/video51.mp4",
							popup: {
								formulas: [
									{
										text: "(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub> + 2NaOH <text-line>→<text-line-text>t<sup>0</sup></text-line-text></text-line> Na<sub>2</sub>SO<sub>4</sub> + 2H<sub>2</sub>O + 2NH<sub>3</sub>↑"
									},
									{
										text: "NH<sub>3</sub> + H<sub>2</sub>O ⇄ <indexes>NH<top-index>+</top-index><bottom-index>4</bottom-index></indexes> + OH<sup>-</sup>"
									}
								]
							}
						}
					},
					{
						text: "Взаємодія газів",
						tooltip: "Взаємодія аміаку з хлороводнем у газоподібній фазі над концетрованими розчинами",
						content: {
							urlVideo: "video/video52.mp4",
							popup: {
								formulas: [
									{
										text: "NH<sub>3</sub> + HCl = NH<sub>4</sub>Cl"
									}
								]
							}
						}
					},
					{
						type: "spoller",
						openerText: "Нітратна кислота",
						tooltip: "Нітратна кислота",
						items: [
							{
								text: "Взаємодія з міддю",
								tooltip: "Взаємодія концентрованої нітратної кислоти з міддю при нагріванні",
								content: {
									urlVideo: "video/video53.mp4",
									popup: {
										formulas: [
											{
												text: "Cu + 3HNO<sub>3</sub> = Cu(NO<sub>3</sub>)<sub>2</sub> + 2NO<sub>2</sub> + 2H<sub>2</sub>O"
											},
											{
												type: "parts",
												text: [
													[
														"Cu<sup>0</sup> - 2<e>e</e> = Cu<sup>+2</sup>",
														"N<sup>+5</sup> + <e>e</e> = N<sup>+4</sup>"
													],
													"2",
													[
														"1 - <span class=\"yellow\">окисник</span>",
														"2 - <span class=\"blue\">відновник</span>"
													]
												]
											}
										]
									}
								}
							},
							{
								text: "З купрум гідроксидом",
								tooltip: "Взаємодія нітратної кислоти з купрум (ІІ) гідроксидом",
								content: {
									urlVideo: "video/video54.mp4",
									popup: {
										formulas: [
											{
												text: "Cu(OH)<sub>2</sub> + 2HNO<sub>3</sub> = Cu(NO<sub>3</sub>)<sub>2</sub> + 2H<sub>2</sub>O"
											},
											{
												text: "Cu(OH)<sub>2</sub> + 2H<sup>+</sup> = Cu<sup>2+</sup> + 2H<sub>2</sub>O"
											}
										]
									}
								}
							}
						]
					},
					{
						text: "Реакція фосфат-йонів",
						tooltip: "Реакція між аргентум нітратом та калій фосфатом",
						content: {
							urlVideo: "video/video55.mp4",
							popup: {
								formulas: [
									{
										text: "K<sub>3</sub>PO<sub>4</sub> + 3AgNO<sub>3</sub> = Ag<sub>3</sub>PO<sub>4</sub>↓ + 3KNO<sub>3</sub>"
									},
									{
										text: "<indexes>PO<top-index>3-</top-index><bottom-index>4</bottom-index></indexes> + 3Ag<sup>+</sup> = Ag<sub>3</sub>PO<sub>4</sub>↓"
									}
								]
							}
						}
					}
				]
			},
			{
				type: "spoller",
				openerText: "Четверта група",
				items: [
					{
						text: "Вуглекислий газ",
						tooltip: "Добування вуглекислого газу взаємодією між кальцій карбонатом та розчином хлоридної кислоти",
						content: {
							urlVideo: "video/video56.mp4",
							popup: {
								formulas: [
									{
										text: "CuCO<sub>3</sub> + 2HCl = CaCl<sub>2</sub> + H<sub>2</sub>O + CO<sub>2</sub>↑"
									},
									{
										text: "Cu(OH)<sub>2</sub> + CO<sub>2</sub> = CaCO<sub>3</sub>↓ + H<sub>2</sub>O"
									},
									{
										text: "CuCO<sub>3</sub> + H<sub>2</sub>O + CO<sub>2</sub> = Ca(HCO<sub>3</sub>)<sub>2</sub>"
									}
								]
							}
						}
					},
					{
						text: "Силікати",
						tooltip: "Добування силікатної кислоти взаємодією натрій силікату з хлоридною кислотою",
						content: {
							urlVideo: "video/video57.mp4",
							popup: {
								formulas: [
									{
										text: "Na<sub>2</sub>SiO<sub>3</sub> + 2HCl = H<sub>2</sub>SiO<sub>3</sub>↓ + 2NaCl"
									},
									{
										text: "<indexes>SiO<top-index>2-</top-index><bottom-index>3</bottom-index></indexes> + 2H<sup>+</sup> = H<sub>2</sub>SiO<sub>3</sub>↓"
									}
								]
							}
						}
					}
				]
			}
		]
	}
}
