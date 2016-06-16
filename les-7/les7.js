
onOptionsItemSelected(MenuItem item{
	Dialog Fragment dialog = new DataDialogFragmnt();
	dialog.show(getSupportFragmentManager(), "DATA_PICKER");

	// fTrans = getFragmentManager().beginTransaction();
	// frag = new BadHabFragment();
	// switch(item.getItemid()){
	// 	case R.id.bad_hab:
	// 	fTrans.add(R.id.cool, frag).addToBackStack(null).commit());
	// }

	return super.onOptionsItemSelected(item);

}
public void onBackPressed(){
	if(getFragmentManager().getBackStackEntryCount() == 0){
		this.finish();
	}else{
		getFragmentManager().popBackStack();
	}
}

public Dialog onCreateDialog(Bundle savedInstanceState) {
	final Calendar c = Calendar.getInstance();
	int year = c.get(Calendar.YEAR);
	int month = c.get(Calendar.MONTH);
	int day = c.get(Calendar.DAY_OF_MONTH);
	
	return new DatePickerDialog(getActivity(), this, year, month, day);
}

public void onDateSet(DatePicker view, int year, int monthOfYear, int dayOfMonth){

	Calendar userAge = new GregorianCalendar(year, monthOfYear, dayOfMoonth);
	Calendar minAdultAge = new GregorianCalendar();
	minAdultAge.add(Calendar.YEAR, -18);
	if(minAdultAge.befor(userAge)){
		Toast allertToast;
		allertToast = Toast.makeText(getActivity(), "no 18");
		allertToast.show();
	}
	else{
	BadHabFragment fragment = new BadHabFragment();
	getFragmentManager()
		.beginTransaction()
		.add(R.id.cool, fragment)
		.addToBackStack(null)
		.commit();
	}
} 

//Class BadHabFragment
// public class BadHabFragment extends Fragment
public class BadHabFragment extends android.support.v4.app.Fragment
{
	public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle save){
		View view = inflater.inflate(R.layout.badhablayyout, null);
		return view;
	}
}

//class RecyclerViewAdapter
public class RecyclerViewAdapter extends RecyclerView.Adapter<RecyclerViewAdapter.Care>
{
	List<Cardform> cards;

	RecyclerViewadapter(List<Cardform> cards) ( this.cards = cards; )

	public CardformViewHolder onCreateViewHolder(ViewGroup viewGroup, int i) {
		View v = LayoutInflater.from(viewGroup.getContext()).inflate(R.layout.cardview);
		return pvh;
	}
	
	public void onBindViewHolder(CardformViewHolder cardformViewHolder, int i){
		cardformViewHolder.cardInfoName.setText(cards.get(i).title);
		cardformViewHolder.cardInfo.setText(cards.get(i).info);
		cardformViewHolder.cardIcon.setImageResource(cards.get(i).iconId);
	}
}

//Cardform
public class Cardform{
	String title;
	String info;
	int iconId;

	Cardform(String title, String info, int iconId){
		this.title = title;
		this.info = info;
		this.iconId = iconId;

	}
}