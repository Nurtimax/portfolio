import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ILandingPositionInitialStateType } from '@/types/slices/lading-position-types';
import { PagesTitles } from '@/utils/constants/pages';

const initialState: ILandingPositionInitialStateType = {
  data: {
    position: '/'
  }
};

const landingPositionSlice = createSlice({
  name: 'landingPositionSlice',
  initialState,
  reducers: {
    changePosition: (state, action: PayloadAction<PagesTitles>) => {
      state.data.position = action.payload;
    }
  }
});
export const actionLandingPositionSlice = landingPositionSlice.actions;

export default landingPositionSlice.reducer;
